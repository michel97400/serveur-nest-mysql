import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MenuController } from './app.controller';
import { MenuService } from './app.service';
import { Menu } from './menu.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_HOST', 'mysql_db'),
        port: configService.get<number>('DATABASE_PORT', 3306), 
        username: configService.get<string>('DATABASE_USERNAME', 'root'), 
        password: configService.get<string>('DATABASE_PASSWORD', 'azerty'), 
        database: configService.get<string>('DATABASE_NAME', 'menu_db'),
        entities: [Menu], 
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([Menu]), // <-- Ajouter cette ligne pour enregistrer le MenuRepository
  ],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
