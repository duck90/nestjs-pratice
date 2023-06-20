import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'testadmin',
  password: '1234',
  database: 'duck90',
  logging: true,
  entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
  synchronize: false,
  // migrationsTableName: 'users',
  migrations: ['src/migrations/*.ts'],
});
