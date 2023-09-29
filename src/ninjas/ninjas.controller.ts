import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { NinjasService } from './ninjas.service';

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
    return { id };
  }

  // POST /ninjas
  @Post()
  createNinja() {
    return {};
  }

  // PUT /ninjas/:id
  @Put(':id')
  updateNinja(@Param('id') id: string) {
    return { id };
  }

  // DELETE /ninjas/:id
  @Delete(':id')
  removeNinja(@Param('id') id: string) {
    return {
      id,
    };
  }
}
