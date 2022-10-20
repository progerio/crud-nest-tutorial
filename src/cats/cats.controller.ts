import { Body, Controller,  Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat-dto';

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto){
    return 'Post create\n';
  }

  @Get()
  findAll(): string {
    return 'This is action findAll';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This actiokn returns a #${params.id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat `;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
