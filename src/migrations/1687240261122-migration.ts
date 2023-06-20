import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1687240261122 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users"
      add column password varchar(255) default null,
      add column salt varchar(255) default null
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users"
        drop column password,
        drop column salt
        `,
    );
  }
}
