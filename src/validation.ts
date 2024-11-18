import { Lesson, ScheduleConflict } from "./types";
import { schedule } from "./data";

export function validateLesson(lesson: Lesson): ScheduleConflict | null {
  const conflicts = schedule.filter(
    existingLesson =>
      existingLesson.dayOfWeek === lesson.dayOfWeek &&
      existingLesson.timeSlot === lesson.timeSlot &&
      (existingLesson.professorId === lesson.professorId ||
        existingLesson.classroomNumber === lesson.classroomNumber)
  );

  if (conflicts.length > 0) {
    const conflict = conflicts[0];
    return {
      type: conflict.professorId === lesson.professorId 
        ? "ProfessorConflict" 
        : "ClassroomConflict",
      lessonDetails: conflict,
    };
  }

  return null;
}
