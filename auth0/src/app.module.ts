import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorizationModule } from './authorization/authorization.module';
import { JwtStrategy } from './authorization/authorization.strategy';

@Module({
  imports: [AuthorizationModule],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {
  constructor() {
    console.log('This is user module ');
  }
}
