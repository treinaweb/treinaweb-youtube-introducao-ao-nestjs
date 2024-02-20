import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm-config';
import { TaskModule } from './task/task.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), TaskModule],
})
export class AppModule {}
