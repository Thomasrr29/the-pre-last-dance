import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ShowService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Events')
@Controller('events')
export class ShowController {
  constructor(private readonly eventsService: ShowService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
  @ApiOperation({ summary: 'Create a new event' })
  @ApiResponse({ status: 201, description: 'Event successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  @ApiOperation({ summary: 'Get a list of all events' })
  @ApiResponse({ status: 200, description: 'List of events.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findAll(@Param('page') page: number, @Param('limit') limit: number) {
    return this.eventsService.findAll(page, limit);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  @ApiOperation({ summary: 'Get details of an event by ID' })
  @ApiResponse({ status: 200, description: 'Event details.' })
  @ApiResponse({ status: 404, description: 'Event not found.' })
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update an event by ID' })
  @ApiResponse({ status: 200, description: 'Event successfully updated.' })
  @ApiResponse({ status: 404, description: 'Event not found.' })
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(id, updateEventDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete an event by ID' })
  @ApiResponse({ status: 200, description: 'Event successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Event not found.' })
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }
}