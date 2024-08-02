import { Injectable } from '@nestjs/common';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utils } from 'src/utils/utils';
import { Servico } from './entities/servico.entity';

@Injectable()
export class ServicosService {
  constructor(
    private readonly utils: Utils,
    @InjectRepository(Servico)
    private readonly servicosRepository: Repository<Servico>,
  ) {}
  async create(createServicoDto: CreateServicoDto) {
    createServicoDto.valorBanheiro = this.utils.formatDecimal(
      createServicoDto.valorBanheiro,
    );
    createServicoDto.valorConzinha = this.utils.formatDecimal(
      createServicoDto.valorConzinha,
    );
    createServicoDto.valorMinimo = this.utils.formatDecimal(
      createServicoDto.valorMinimo,
    );
    createServicoDto.valorOutros = this.utils.formatDecimal(
      createServicoDto.valorOutros,
    );
    createServicoDto.valorQuarto = this.utils.formatDecimal(
      createServicoDto.valorQuarto,
    );
    createServicoDto.valorQuintal = this.utils.formatDecimal(
      createServicoDto.valorQuintal,
    );
    createServicoDto.valorSala = this.utils.formatDecimal(
      createServicoDto.valorSala,
    );

    return await this.servicosRepository.save(createServicoDto);
  }

  async findAll() {
    return await this.servicosRepository.find();
  }

  async findOne(id: number) {
    return await this.servicosRepository.findOneBy({ id: id });
  }

  async update(id: number, updateServicoDto: UpdateServicoDto) {
    updateServicoDto.valorBanheiro = this.utils.formatDecimal(
      updateServicoDto.valorBanheiro,
    );
    updateServicoDto.valorConzinha = this.utils.formatDecimal(
      updateServicoDto.valorConzinha,
    );
    updateServicoDto.valorMinimo = this.utils.formatDecimal(
      updateServicoDto.valorMinimo,
    );
    updateServicoDto.valorOutros = this.utils.formatDecimal(
      updateServicoDto.valorOutros,
    );
    updateServicoDto.valorQuarto = this.utils.formatDecimal(
      updateServicoDto.valorQuarto,
    );
    updateServicoDto.valorQuintal = this.utils.formatDecimal(
      updateServicoDto.valorQuintal,
    );
    updateServicoDto.valorSala = this.utils.formatDecimal(
      updateServicoDto.valorSala,
    );
    return await this.servicosRepository.update(id, updateServicoDto);
  }
}
