import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './menu.entity';

@Injectable()
export class MenuService{
  constructor(
    @InjectRepository(Menu) 
    private menuRepository: Repository<Menu>,
  ) {}

  async getAllMenus() {
    return this.menuRepository.find()
  }

  async findMenuByDay(day: string): Promise<Menu[]> {
    return this.menuRepository.find({ where: { day } });
  }

  async createMenu(nom: string, description: string, day: string): Promise<Menu> {
    const newMenu = this.menuRepository.create({ nom, description, day});
    return this.menuRepository.save(newMenu);
  }

  async removeMenu(id: number): Promise<void> {
    await this.menuRepository.delete(id);
  }


}
