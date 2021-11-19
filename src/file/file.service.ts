import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileUpload } from 'graphql-upload';
import { Readable } from 'stream';
import { Repository } from 'typeorm';
import { FileEntity } from './file.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private fileRepository: Repository<FileEntity>,
  ) {}

  async uploadDatabaseFile({ filename, createReadStream }: FileUpload) {
    const fileStream = createReadStream();

    const buffer = await this.streamToBuffer(fileStream);

    const newFile = await this.fileRepository.create({
      filename,
      data: buffer,
    });
    await this.fileRepository.save(newFile);
    return newFile;
  }

  async deleteDatabaseFile(id: string) {
    const file = await this.fileRepository.findOne({ id });

    await this.fileRepository.remove(file);
  }

  async getFileById(fileId: string) {
    const file = await this.fileRepository.findOne(fileId);
    if (!file) {
      throw new NotFoundException();
    }
    return file;
  }

  private async streamToBuffer(stream: Readable): Promise<Buffer> {
    const buffer = [];

    return new Promise((resolve, reject) =>
      stream
        .on('error', (error) => reject(error))
        .on('data', (data) => buffer.push(data))
        .on('end', () => resolve(Buffer.concat(buffer))),
    );
  }
}
