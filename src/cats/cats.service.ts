import { Injectable } from '@nestjs/common';
import { UpdateCatDto } from './dto/update-cat-dto';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    cat.id = this.cats.length++;
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
