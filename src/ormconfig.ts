import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
};

export const OrmConfig = {
  ...typeOrmModuleOptions,
  // migrationsTableName: 'migrations',
  // migrations: ['migrations/*.ts'],
  // cli: {
  //   migrationsDir: 'migrations',
  // },
};

export default OrmConfig;
