import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MenuService } from './app.service';
import { Menu } from './menu.entity';

@Controller('menus')
export class MenuController {
  constructor(private readonly MenuService: MenuService) {}

  @Get()
  getAllMenu(): Promise<Menu[]> {
    return this.MenuService.getAllMenus()
  }

  @Get(':day')
  getMenusForDay(@Param('day') day: string): Promise<Menu[]> {
    return this.MenuService.findMenuByDay(day);
  }

  @Post()
  createMenu(@Body() nom: string, description:string, day:string) {
    return this.MenuService.createMenu(nom, description, day)
  }

  @Delete()
  removeMenu(@Param('id') id: number) {
    try {
      return this.MenuService.removeMenu(id)
    } catch (error) {
      console.error(`Menu non trouvé: ${error}`)
    }
    
  };
}
