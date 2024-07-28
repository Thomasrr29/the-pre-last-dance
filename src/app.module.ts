import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ShowModule } from './events/events.module';
import { PersistenceModule } from './persistence/persistence.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [UsersModule, ShowModule, PersistenceModule],
  providers: [AuthService]
})
export class AppModule {}
