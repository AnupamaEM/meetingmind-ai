import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MeetingDocument = Meeting & Document;

@Schema({
  timestamps: true,
})
export class Meeting {

  @Prop({
    required: true,
    trim: true,
  })
  title!: string;

  @Prop({
    default: '',
  })
  notes!: string;

  @Prop({
    default: '',
  })
  summary!: string;


  @Prop({
    type: [String],
    default: [],
  })
  keyPoints!: string[];

  @Prop({
    type: [
      {
        task: String,
        owner: String,
        deadline: String,
        status: {
          type: String,
          default: 'Pending',
        },
      },
    ],
    default: [],
  })
  actionItems!: {
    task: string;
    owner: string;
    deadline: string;
    status: string;
  }[];
}

export const MeetingSchema =
  SchemaFactory.createForClass(Meeting);