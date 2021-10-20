import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1634677543625 implements MigrationInterface {
    name = 'migration1634677543625'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tbl_citizens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cpf" character varying NOT NULL, "birth_date" TIMESTAMP NOT NULL, "vaccine_name" character varying NOT NULL, "vaccine_dose" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_213cdbffccd587e1b095df4718f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tbl_users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bb1d884179b3e42514b36c01e4e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tbl_users"`);
        await queryRunner.query(`DROP TABLE "tbl_citizens"`);
    }

}
