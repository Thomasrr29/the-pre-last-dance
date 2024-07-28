import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Events } from './entities/event.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ShowService {

  constructor(@InjectModel(Events.name) private eventsModel: Model<Events>){}

  async create(createEventDto: CreateEventDto) {

    const {name} = createEventDto

    const validation = await this.eventsModel.findOne({where: {name: name}})

    if(validation) throw new Error(`Event with the name ${name} already exists, please try with another`)

    const event = new this.eventsModel(createEventDto)

    return await event.save()

  }

  async findAll(page: number, limit: number) {
    
    const events = await this.eventsModel.find().skip((page - 1) * limit).limit(limit).exec()
    const total = await this.eventsModel.countDocuments().exec()

    return {
      data: events,
      total: total,
      page: page, 
    }


  }

  async findOne(id: string) {
    return await this.eventsModel.findById(id)
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    return this.eventsModel.findByIdAndUpdate(id, updateEventDto, {new: true})
  
  }

  async remove(id: string) {
    return await this.eventsModel.findByIdAndDelete(id)
  }
}
