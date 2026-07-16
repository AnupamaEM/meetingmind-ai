export const SUMMARY_PROMPT = (notes: string) => `
You are an AI Meeting Assistant.

Analyze the following meeting notes.

Return ONLY valid JSON in this exact format:

{
  "summary": "",
  "keyPoints": [],
  "actionItems": [
    {
      "task": "",
      "owner": "",
      "deadline": ""
    }
  ]
}

Meeting Notes:

${notes}
`;