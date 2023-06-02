/**
 * @param question comes from questions.data
 * @param subject determined from section of the form
 * @returns full question with subject
 */
export default function generateQuestion(
  question: string,
  subject: string
): string {
  return `${subject} ${question}`
}
