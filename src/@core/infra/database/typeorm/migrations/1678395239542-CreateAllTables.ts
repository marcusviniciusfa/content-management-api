import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateAllTables1678395239542 implements MigrationInterface {
  name = 'CreateAllTables1678395239542'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL, "name" character varying NOT NULL, "isAdmin" boolean NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "contents" ("id" uuid NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "type" "public"."contents_type_enum" NOT NULL, CONSTRAINT "PK_b7c504072e537532d7080c54fac" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "details-views" ("contentId" character varying NOT NULL, "userId" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_e3e5d2b6e246388063dbbb53943" PRIMARY KEY ("contentId", "userId"))`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" DROP COLUMN "createdAt"`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" ADD "createdAt" TIMESTAMP NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" DROP CONSTRAINT "PK_e3e5d2b6e246388063dbbb53943"`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" ADD CONSTRAINT "PK_064c2e8aeb9be0d2f12212f2e0c" PRIMARY KEY ("contentId")`,
    )
    await queryRunner.query(`ALTER TABLE "details-views" DROP COLUMN "userId"`)
    await queryRunner.query(
      `ALTER TABLE "details-views" ADD "userId" uuid NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" DROP CONSTRAINT "PK_064c2e8aeb9be0d2f12212f2e0c"`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" ADD CONSTRAINT "PK_e3e5d2b6e246388063dbbb53943" PRIMARY KEY ("contentId", "userId")`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" DROP CONSTRAINT "PK_e3e5d2b6e246388063dbbb53943"`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" ADD CONSTRAINT "PK_5ea2985d048828d59aa9dcc9d5f" PRIMARY KEY ("userId")`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" DROP COLUMN "contentId"`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" ADD "contentId" uuid NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" DROP CONSTRAINT "PK_5ea2985d048828d59aa9dcc9d5f"`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" ADD CONSTRAINT "PK_e3e5d2b6e246388063dbbb53943" PRIMARY KEY ("userId", "contentId")`,
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_5ea2985d048828d59aa9dcc9d5" ON "details-views" ("userId") `,
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_064c2e8aeb9be0d2f12212f2e0" ON "details-views" ("contentId") `,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" ADD CONSTRAINT "FK_5ea2985d048828d59aa9dcc9d5f" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" ADD CONSTRAINT "FK_064c2e8aeb9be0d2f12212f2e0c" FOREIGN KEY ("contentId") REFERENCES "contents"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "details-views" DROP CONSTRAINT "FK_064c2e8aeb9be0d2f12212f2e0c"`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" DROP CONSTRAINT "FK_5ea2985d048828d59aa9dcc9d5f"`,
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_064c2e8aeb9be0d2f12212f2e0"`,
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_5ea2985d048828d59aa9dcc9d5"`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" DROP CONSTRAINT "PK_e3e5d2b6e246388063dbbb53943"`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" ADD CONSTRAINT "PK_5ea2985d048828d59aa9dcc9d5f" PRIMARY KEY ("userId")`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" DROP COLUMN "contentId"`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" ADD "contentId" character varying NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" DROP CONSTRAINT "PK_5ea2985d048828d59aa9dcc9d5f"`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" ADD CONSTRAINT "PK_e3e5d2b6e246388063dbbb53943" PRIMARY KEY ("contentId", "userId")`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" DROP CONSTRAINT "PK_e3e5d2b6e246388063dbbb53943"`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" ADD CONSTRAINT "PK_064c2e8aeb9be0d2f12212f2e0c" PRIMARY KEY ("contentId")`,
    )
    await queryRunner.query(`ALTER TABLE "details-views" DROP COLUMN "userId"`)
    await queryRunner.query(
      `ALTER TABLE "details-views" ADD "userId" character varying NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" DROP CONSTRAINT "PK_064c2e8aeb9be0d2f12212f2e0c"`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" ADD CONSTRAINT "PK_e3e5d2b6e246388063dbbb53943" PRIMARY KEY ("contentId", "userId")`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" DROP COLUMN "createdAt"`,
    )
    await queryRunner.query(
      `ALTER TABLE "details-views" ADD "createdAt" TIMESTAMP NOT NULL`,
    )
    await queryRunner.query(`DROP TABLE "details-views"`)
    await queryRunner.query(`DROP TABLE "contents"`)
    await queryRunner.query(`DROP TABLE "users"`)
  }
}
