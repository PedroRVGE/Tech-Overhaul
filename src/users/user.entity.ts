import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'Client' })
  role: string;

  @Column({ default: false })
  testSubject: boolean;

  @Column({ nullable: true })
  allergicReactions: string;
}