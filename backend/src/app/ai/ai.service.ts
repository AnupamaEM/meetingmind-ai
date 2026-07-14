import { Injectable,Inject } from '@nestjs/common';

import { MeetingService } from '../meeting/meeting.service';

import type { AIProvider } from './ai-provider.interface';

@Injectable()
export class AiService {

constructor(

private readonly meetingService: MeetingService,

@Inject("AI_PROVIDER")
private readonly aiProvider: AIProvider,

){}

  async generateSummary(
    meetingId: string,
  ) {

    const meeting =
      await this.meetingService.findOne(meetingId);

    const aiResult =
      await this.aiProvider.generateSummary(
        meeting.notes,
      );

    await this.meetingService.update(
      meetingId,
      {
        summary: aiResult.summary,
        keyPoints: aiResult.keyPoints,
        actionItems: aiResult.actionItems,
      } as any,
    );

    return aiResult;

  }

}