import { Type } from 'class-transformer';
import {
  Length,
  IsNotEmpty,
  IsCurrency,
  Matches,
  IsNumber,
  Max,
  Min,
} from 'class-validator';

export class CreateServicoDto {
  @IsNotEmpty({ message: 'Campo nome não pode ser vazio' })
  @Length(3, 99, { message: 'Campo nome deve ter entre 3 e 99 caracteres' })
  nome: string;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor mínimo com valor invalido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Valor mínimo não pode ser negativo',
  })
  valorMinimo: number;

  @IsNumber()
  @Min(0)
  @Max(10)
  @Type(() => Number)
  quantidadedeHoras: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  @Type(() => Number)
  porcentagem: number;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor mínimo com valor invalido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Valor mínimo não pode ser negativo',
  })
  valorQuarto: number;

  @IsNumber()
  @Min(0)
  @Max(10)
  @Type(() => Number)
  horasQuarto: number;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor mínimo com valor invalido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Valor mínimo não pode ser negativo',
  })
  valorSala: number;

  @IsNumber()
  @Min(0)
  @Max(10)
  @Type(() => Number)
  horasSala: number;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor mínimo com valor invalido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Valor mínimo não pode ser negativo',
  })
  valorBanheiro: number;

  @IsNumber()
  @Min(0)
  @Max(10)
  @Type(() => Number)
  horasBanheiro: number;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor mínimo com valor invalido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Valor mínimo não pode ser negativo',
  })
  valorConzinha: number;

  @IsNumber()
  @Min(0)
  @Max(10)
  @Type(() => Number)
  horasCozinha: number;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor mínimo com valor invalido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Valor mínimo não pode ser negativo',
  })
  valorQuintal: number;

  @IsNumber()
  @Min(0)
  @Max(10)
  @Type(() => Number)
  horasQuintal: number;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor mínimo com valor invalido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Valor mínimo não pode ser negativo',
  })
  valorOutros: number;

  @IsNumber()
  @Min(0)
  @Max(10)
  @Type(() => Number)
  horasOutros: number;

  @IsNotEmpty({ message: 'Icone nao pode ser vazio' })
  icone: string;

  @IsNumber({}, { message: 'Icone nao pode ser vazio' })
  @Min(1)
  @Type(() => Number)
  posicao: number;
}
