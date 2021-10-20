import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
} from 'typeorm';

@Entity('tbl_citizens')
class Citizen {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column({name: "birth_date"})
  birthDate: Date;

  @Column({name: "vaccine_name"})
  vaccineName: string;

  @Column({name: "vaccine_dose"})
  vaccineDose: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Citizen;
