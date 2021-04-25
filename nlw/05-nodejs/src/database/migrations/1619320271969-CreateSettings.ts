import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1619320271969 implements MigrationInterface {

    // Criando uma tabela dentro do banco de dados
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            // Estrutura da tabela settings
            new Table({
                name: "settings",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "username",
                        type: "varchar"
                    },
                    {
                        name: "chat",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    // Apaga a tabela criada a cima
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings");
    }

}
