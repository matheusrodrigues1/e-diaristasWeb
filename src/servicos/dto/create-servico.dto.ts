import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export class CreateServicoDto {
  nome: string;

  valorMinimo: number;

  quantidadedeHoras: number;

  porcentagem: number;

  valorQuarto: number;

  horasQuarto: number;

  valorSala: number;

  horasSala: number;

  valorBanheiro: number;

  horasBanheiro: number;

  valorConzinha: number;

  horasCozinha: number;

  valorQuintal: number;

  horasQuintal: number;

  valorOutros: number;

  horasOutros: number;

  icone: string;

  posicao: number;
}
