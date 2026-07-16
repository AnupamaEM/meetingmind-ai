import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenAI } from '@google/genai';

import { AIProvider } from './ai-provider.interface';
import { SUMMARY_PROMPT } from './summary.prompt';

@Injectable()
export class GeminiProvider implements AIProvider {
  private ai: GoogleGenAI;

  constructor(private readonly configService: ConfigService) {
    this.ai = new GoogleGenAI({
      apiKey: this.configService.get<string>('GEMINI_API_KEY')!,
    });
  }

  async generateSummary(notes: string): Promise<any> {
    const prompt = SUMMARY_PROMPT(notes);

    const response = await this.ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const text = response.text;

if (!text) {
  throw new Error("Gemini returned an empty response.");
}

try {
  return JSON.parse(text);
} catch (error) {
  console.error("Invalid JSON from Gemini:", text);
  throw new Error("Gemini returned malformed JSON.");
}
  }

  async chat(context: string, question: string): Promise<string> {
    throw new Error('Not implemented');
  }
}