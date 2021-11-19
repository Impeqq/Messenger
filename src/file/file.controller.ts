import { Controller, Get, Header, HttpCode, Param, Res } from '@nestjs/common';
import { FileService } from './file.service';
import { Response } from 'express';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @HttpCode(201)
  @Get(':id')
  @Header('Content-Type', 'image/png')
  async getDatabaseFileById(
    @Param('id') id: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const file = await this.fileService.getFileById(id);
    response.end(file.data);
  }
}
