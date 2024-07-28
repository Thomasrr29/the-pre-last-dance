import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ShowModule } from './events/events.module';
import { PersistenceModule } from './persistence/persistence.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ExceptionFilterModule } from './common/exception/exception.filters.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UsersModule, 
    ShowModule, 
    PersistenceModule, 
    AuthModule,
    ExceptionFilterModule]
})
export class AppModule {}
