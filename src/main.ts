import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局管道
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 去除在验证类中不存在的属性
      transform: true, // 自动转换类型
    }),
  );

  // 全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor());

  // 全局异常过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

  // 允许跨域
  app.enableCors();

  await app.listen(3005);
}
bootstrap();
