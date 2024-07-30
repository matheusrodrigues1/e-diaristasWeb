import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Servico {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  valorMinimo: number;

  @Column()
  quantidadedeHoras: number;

  @Column()
  porcentagem: number;

  @Column()
  valorQuarto: number;

  @Column()
  horasQuarto: number;

  @Column()
  valorSala: number;

  @Column()
  horasSala: number;

  @Column()
  valorBanheiro: number;

  @Column()
  horasBanheiro: number;

  @Column()
  valorConzinha: number;

  @Column()
  horasCozinha: number;

  @Column()
  valorQuintal: number;

  @Column()
  horasQuintal: number;

  @Column()
  valorOutros: number;

  @Column()
  horasOutros: number;

  @Column()
  icone: string;

  @Column()
  posicao: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updateAt: Date;
}
