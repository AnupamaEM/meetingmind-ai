import { Injectable } from '@nestjs/common';

import { AIProvider } from './ai-provider.interface';

@Injectable()
export class GeminiProvider implements AIProvider {

  async generateSummary(notes: string): Promise<any> {

    throw new Error("Not implemented yet");

  }

  async chat(
    context: string,
    question: string,
  ): Promise<string> {

    throw new Error("Not implemented yet");

  }

}