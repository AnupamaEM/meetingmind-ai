import { Module } from '@nestjs/common';

import { MeetingModule } from '../meeting/meeting.module';

import { AiController } from './ai.controller';

import { AiService } from './ai.service';

import { GeminiProvider } from './gemini.provider';

@Module({

  imports: [

    MeetingModule,

  ],

  controllers: [

    AiController,

  ],

  providers: [

    AiService,

    {
      provide: 'AI_PROVIDER',

      useClass: GeminiProvider,
    },

  ],

})

export class AiModule {}