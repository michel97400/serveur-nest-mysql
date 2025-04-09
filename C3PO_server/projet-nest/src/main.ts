import { NestFactory } from '@nestjs/core';
import { MenuModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(MenuModule);
  app.enableCors({
    origin: 'http://localhost:8080',  // Permet uniquement les requêtes de ton frontend
    methods: 'GET,POST, DELETE',             // Autoriser les méthodes que tu souhaites
    allowedHeaders: 'Content-Type',  // Autoriser les en-têtes
  });
  await app.listen(3405); // Assure-toi que ton backend écoute sur le bon port
}
bootstrap();
