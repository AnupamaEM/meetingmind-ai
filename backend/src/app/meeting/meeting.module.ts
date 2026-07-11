import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import {
  Meeting,
  MeetingSchema,
} from './schemas/meeting.schema';

import { MeetingController } from './meeting.controller';
import { MeetingService } from './meeting.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Meeting.name,
        schema: MeetingSchema,
      },
    ]),
  ],

  controllers: [MeetingController],

  providers: [MeetingService],

  exports: [MeetingService],
})
export class MeetingModule {}