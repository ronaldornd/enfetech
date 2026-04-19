export interface SRSData {
  repetitions: number;
  easeFactor: number;
  interval: number;
  dueDate: number;
}

export type SRSGrade = 'again' | 'good' | 'easy';

/**
 * Calculates the next SRS interval using a modified SM-2 algorithm.
 */
export function calculateNextReview(grade: SRSGrade, currentData?: SRSData): SRSData {
  const data: SRSData = currentData || {
    repetitions: 0,
    easeFactor: 2.5,
    interval: 0,
    dueDate: Date.now()
  };

  // Map our simplified grades to SM-2 numeric grades (0-5)
  // 'again' = 1 (blackout)
  // 'good' = 4 (correct response after a hesitation)
  // 'easy' = 5 (perfect response)
  const numericGrade = grade === 'again' ? 1 : grade === 'good' ? 4 : 5;

  let newRepetitions = data.repetitions;
  let newInterval = data.interval;
  let newEaseFactor = data.easeFactor;

  if (numericGrade < 3) {
    newRepetitions = 0;
    newInterval = 1;
  } else {
    if (newRepetitions === 0) {
      newInterval = 1;
    } else if (newRepetitions === 1) {
      newInterval = 6;
    } else {
      newInterval = Math.round(data.interval * data.easeFactor);
    }
    newRepetitions += 1;
  }

  newEaseFactor = data.easeFactor + (0.1 - (5 - numericGrade) * (0.08 + (5 - numericGrade) * 0.02));
  if (newEaseFactor < 1.3) newEaseFactor = 1.3;

  // Calculate new due date (in milliseconds)
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Normalize to start of day for better grouping
  const nextDueDate = now.getTime() + (newInterval * 24 * 60 * 60 * 1000);

  return {
    repetitions: newRepetitions,
    easeFactor: newEaseFactor,
    interval: newInterval,
    dueDate: nextDueDate
  };
}

/**
 * Checks if a card is due for review today or in the past
 */
export function isCardDue(data?: SRSData): boolean {
  if (!data) return true; // Never reviewed cards are always due
  return Date.now() >= data.dueDate;
}
