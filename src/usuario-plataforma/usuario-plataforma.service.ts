import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUsuarioPlataformaDto } from './dto/create-usuario-plataforma.dto';
import { UpdateUsuarioPlataformaDto } from './dto/update-usuario-plataforma.dto';
import { BeforeInsert, Repository } from 'typeorm';
import { UsuarioPlataforma } from './entities/usuario-plataforma.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioPlataformaService {
  constructor(
    @InjectRepository(UsuarioPlataforma)
    private usuarioRepository: Repository<UsuarioPlataforma>,
  ) {}

  async create(createUsuarioPlataformaDto: CreateUsuarioPlataformaDto) {
    const user = await this.usuarioRepository.findOneBy({
      email: createUsuarioPlataformaDto.email,
    });

    if (
      createUsuarioPlataformaDto.password !==
      createUsuarioPlataformaDto.passwordConfirmation
    ) {
      throw new BadRequestException('Senha nao conferem');
    } else if (!user) {
      createUsuarioPlataformaDto.password = await this.setPassword(
        createUsuarioPlataformaDto.password,
      );

      return this.usuarioRepository.save(createUsuarioPlataformaDto);
    }

    throw new BadRequestException('Email ja cadastrado');
  }

  async findAll() {
    return await this.usuarioRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} usuarioPlataforma`;
  }

  async update(
    id: number,
    updateUsuarioPlataformaDto: UpdateUsuarioPlataformaDto,
  ) {
    const user = await this.usuarioRepository.findOneBy({ id: id });
    const userEmail = await this.usuarioRepository.findOneBy({
      email: updateUsuarioPlataformaDto.email,
    });

    if (
      updateUsuarioPlataformaDto.password !==
      updateUsuarioPlataformaDto.passwordConfirmation
    ) {
      throw new BadRequestException('senha não confere');
    } else if (!userEmail || userEmail.email === user.email) {
      user.nome = updateUsuarioPlataformaDto.nome;
      user.email = updateUsuarioPlataformaDto.email;
      user.password = await this.setPassword(
        updateUsuarioPlataformaDto.password,
      );
      await this.usuarioRepository.save(user);
      return user;
    } else if (userEmail.email !== user.email) {
      throw new BadRequestException('email já cadastrado');
    }
  }

  remove(id: number) {
    return `This action removes a #${id} usuarioPlataforma`;
  }

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    return passwordHash;
  }
}
