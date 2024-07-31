import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as exphbs from 'express-handlebars';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const viewPatch = join(__dirname, '..', 'views');

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(viewPatch);
  app.setViewEngine('hbs');
  app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'main' }));

  await app.listen(3000);
}
bootstrap();
