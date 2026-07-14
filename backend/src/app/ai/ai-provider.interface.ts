export interface AIProvider {

  generateSummary(notes: string): Promise<any>;

  chat(context: string, question: string): Promise<string>;

}