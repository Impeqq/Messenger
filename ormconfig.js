module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DATABASE || 'space_db',
  synchronize: true,
  logging: false,
  entities: ['dist/**/*.entity.js'],
  extra: {
    ssl:
      process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
  },
};
