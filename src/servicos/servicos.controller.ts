import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Redirect,
  Request,
  UseFilters,
} from '@nestjs/common';
import { ServicosService } from './servicos.service';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';
import { Servico } from './entities/servico.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Utils } from 'src/utils/utils';
import { CreateException } from 'src/commom/filters/create-exceptions.filter';

@Controller('admin/servicos')
export class ServicosController {
  constructor(
    private readonly servicosService: ServicosService,
    private readonly utils: Utils,
    @InjectRepository(Servico)
    private readonly servicosRepository: Repository<Servico>,
  ) {}

  @Get('create')
  @Render('servicos/cadastrar')
  exibirCadastrar(@Request() req) {
    return {
      message: req.flash('message'),
      oldData: req.flash('oldData'),
      alert: req.flash('alert'),
    };
  }

  @Get('index')
  @Render('servicos/index')
  async ListartServicos() {
    const servicos = await this.servicosRepository.find();
    return { servicos: servicos };
  }

  @Post()
  @UseFilters(CreateException)
  @Redirect('/admin/servicos/index')
  async cadastrar(@Body() createServicoDto: CreateServicoDto) {
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

  @Get(':id/edit')
  @Render('servicos/editar')
  async atualizarSerivo(@Param('id') id: number) {
    const servico = await this.servicosRepository.findOneBy({ id: id });
    return { servico: servico };
  }

  @Patch(':id/edit')
  @Redirect('/admin/servicos/index')
  async update(
    @Param('id') id: string,
    @Body() updateServicoDto: UpdateServicoDto,
  ) {
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicosService.remove(+id);
  }
}
