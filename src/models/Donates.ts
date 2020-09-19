import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("donates")
class Donate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  blood: string;
}

export default Donate;
