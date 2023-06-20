import { MigrationInterface, QueryRunner } from 'typeorm';

// add user password column
export class Migration1687140713980 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {}

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
