import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '192.168.0.4',
  port: Number(process.env.PORT),
  username: 'norma',
  password: 'norma',
  database: 'iot2',
  logging: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
};

export default ormconfig;
