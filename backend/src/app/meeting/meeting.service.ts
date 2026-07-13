import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';

import { isValidObjectId, Model } from 'mongoose';

import {
  Meeting,
  MeetingDocument,
} from './schemas/meeting.schema';

import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';

@Injectable()
export class MeetingService {

  constructor(
    @InjectModel(Meeting.name)
    private readonly meetingModel: Model<MeetingDocument>,
  ) {}

  async create(createMeetingDto: CreateMeetingDto) {
    const meeting =
      new this.meetingModel(createMeetingDto);

    return meeting.save();
  }

  async findAll() {
    return this.meetingModel.find().sort({
      createdAt: -1,
    });
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) {
      throw new NotFoundException('Meeting not found');
    }

    const meeting =
      await this.meetingModel.findById(id);

    if (!meeting) {
      throw new NotFoundException(
        'Meeting not found',
      );
    }

    return meeting;
  }

  async update(
    id: string,
    updateMeetingDto: UpdateMeetingDto,
  ) {
    if (!isValidObjectId(id)) {
      throw new NotFoundException('Meeting not found');
    }

    const meeting =
      await this.meetingModel.findByIdAndUpdate(
        id,
        updateMeetingDto,
        {
          new: true,
        },
      );

    if (!meeting) {
      throw new NotFoundException(
        'Meeting not found',
      );
    }

    return meeting;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) {
      throw new NotFoundException('Meeting not found');
    }

    const meeting =
      await this.meetingModel.findByIdAndDelete(id);

    if (!meeting) {
      throw new NotFoundException(
        'Meeting not found',
      );
    }

    return {
      message: 'Meeting deleted successfully',
    };
  }
}