import { Module } from '@nestjs/common';
import { ShowService } from './events.service';
import { ShowController } from './events.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Events, eventSchema } from './entities/event.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: Events.name, schema: eventSchema}])],
  controllers: [ShowController],
  providers: [ShowService],
})
export class ShowModule {}
