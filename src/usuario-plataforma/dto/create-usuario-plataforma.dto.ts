import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUsuarioPlataformaDto {
  @IsNotEmpty({ message: 'Campo n pode esta vazio.' })
  @Length(3, 255, { message: 'Campo n pode esta vazio.' })
  nome: string;

  @IsNotEmpty({ message: 'Campo n pode esta vazio.' })
  @Length(3, 255, { message: 'Campo n pode esta vazio.' })
  @IsEmail({ message: 'Campo n pode esta vazio.' })
  email: string;

  @IsNotEmpty({ message: 'Campo n pode esta vazio.' })
  @Length(8, 20, { message: 'Campo n pode esta vazio.' })
  password: string;

  @IsNotEmpty({ message: 'Campo n pode esta vazio.' })
  @Length(8, 20, { message: 'Campo n pode esta vazio.' })
  passwordconfirmation: string;
}
