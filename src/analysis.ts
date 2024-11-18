import { schedule, courses } from "./data";
import { CourseType } from "./types";

export function getClassroomUtilization(classroomNumber: string): number {
  const totalSlots = 5 * 5; // 5 днів по 5 слотів
  const usedSlots = schedule.filter(lesson => lesson.classroomNumber === classroomNumber).length;
  return (usedSlots / totalSlots) * 100;
}

export function getMostPopularCourseType(): CourseType | null {
    const counts: Record<CourseType, number> = courses.reduce((acc, course) => {
      acc[course.type] = (acc[course.type] || 0) + 1;
      return acc;
    }, {} as Record<CourseType, number>);
  
    // Якщо немає курсів, повертаємо null
    if (Object.keys(counts).length === 0) {
      return null;
    }
  
    return Object.entries(counts).reduce((a, b) => (b[1] > a[1] ? b : a))[0] as CourseType;
  }
  
