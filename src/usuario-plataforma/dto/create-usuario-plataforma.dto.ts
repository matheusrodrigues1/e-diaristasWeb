import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUsuarioPlataformaDto {
  @IsNotEmpty({ message: 'Campo4 n pode esta vazio.' })
  @Length(3, 255, { message: 'Campo6 n pode esta vazio.' })
  nome: string;

  @IsNotEmpty({ message: 'Campo3 n pode esta vazio.' })
  @Length(3, 255, { message: 'Campo n pode esta vazio.' })
  @IsEmail({ message: 'Campo5 n pode esta vazio.' })
  email: string;

  @IsNotEmpty({ message: 'Campo1 n pode esta vazio.' })
  @Length(8, 20, { message: 'Campo3 n pode esta vazio.' })
  password: string;

  @IsNotEmpty({ message: 'Campo22 n pode esta vazio.' })
  @Length(8, 20, { message: 'Campo2 n pode esta vazio.' })
  passwordConfirmation: string;
}
