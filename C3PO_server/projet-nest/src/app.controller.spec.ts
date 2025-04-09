import { Test, TestingModule } from '@nestjs/testing';
import { MenuController } from './app.controller';
import { MenuService } from './app.service';

describe('AppController', () => {
  let appController: MenuController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MenuController],
      providers: [MenuService],
    }).compile();

    appController = app.get<MenuController>(MenuController);
  });
});
