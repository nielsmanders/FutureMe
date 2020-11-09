import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  message: string;

  @Column()
  email: string;

  @Column()
  createdAt: number;

  @Column()
  sendAt: number;
}