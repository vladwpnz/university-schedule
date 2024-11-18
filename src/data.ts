import { Professor, Classroom, Course, Lesson } from "./types";
import { validateLesson } from "./validation";

// Масиви даних
export const professors: Professor[] = [
  { id: 1, name: "John Doe", department: "Mathematics" },
  { id: 2, name: "Jane Smith", department: "Physics" },
  { id: 3, name: "Emily Davis", department: "Chemistry" },
];

export const classrooms: Classroom[] = [
  { number: "101", capacity: 30, hasProjector: true },
  { number: "102", capacity: 25, hasProjector: false },
  { number: "103", capacity: 40, hasProjector: true },
];

export const courses: Course[] = [
  { id: 1, name: "Linear Algebra", type: "Lecture" },
  { id: 2, name: "Physics Lab", type: "Lab" },
  { id: 3, name: "Organic Chemistry", type: "Practice" },
];

export const schedule: Lesson[] = [];

// Додавання нового професора
export function addProfessor(professor: Professor): void {
  professors.push(professor);
}

// Додавання нового заняття
export function addLesson(lesson: Lesson): boolean {
  if (validateLesson(lesson) === null) {
    schedule.push(lesson);
    return true;
  }
  return false;
}

// Перепризначення аудиторії
export function reassignClassroom(lessonId: number, newClassroomNumber: string): boolean {
  const lesson = schedule.find(l => l.courseId === lessonId);
  if (!lesson) return false;

  const conflict = validateLesson({ ...lesson, classroomNumber: newClassroomNumber });
  if (conflict === null) {
    lesson.classroomNumber = newClassroomNumber;
    return true;
  }
  return false;
}

// Скасування заняття
export function cancelLesson(lessonId: number): void {
  const index = schedule.findIndex(lesson => lesson.courseId === lessonId);
  if (index !== -1) {
    schedule.splice(index, 1);
  }
}
