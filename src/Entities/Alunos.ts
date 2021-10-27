import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Alunos extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  nome!: string;

  @Column()
  cpf!: string;

  @Column()
  email!: string;
}