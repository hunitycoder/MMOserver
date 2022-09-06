import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('chats')
export class Chats {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  room: string;

  @Column()
  user: string;

  @Column()
  message: string;
}
