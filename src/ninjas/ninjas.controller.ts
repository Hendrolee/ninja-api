import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  // GET /ninjas?waapon=blade
  @Get()
  getAllNinjas(@Query('weapon') weapon: 'blade' | 'stars') {
    // const ninjasService = new NinjasService();
    return this.ninjasService.getNinjas(weapon);
  }

  // GET /ninjas/:id
  @Get(':id')
  getNinjaById(@Param('id') id: string) {
    return this.ninjasService.getNinja(+id);
  }

  // POST /ninjas
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.createNinja(createNinjaDto);
  }

  // PUT /ninjas/:id
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjasService.updateNinja(+id, updateNinjaDto);
  }

  // DELETE /ninjas/:id
  @Delete(':id')
  removeNinja(@Param('id') id: string) {
    return this.ninjasService.removeNinja(+id);
  }
}
