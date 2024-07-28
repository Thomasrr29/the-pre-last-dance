import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ShowModule } from './events/events.module';
import { PersistenceModule } from './persistence/persistence.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, ShowModule, PersistenceModule, AuthModule]
})
export class AppModule {}
