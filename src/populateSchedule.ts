import { professors, classrooms, courses, schedule } from "./data";
import { TimeSlot, DayOfWeek } from "./types";

export function populateSchedule(): void {
  const timeSlots: TimeSlot[] = [
    "8:30-10:00",
    "10:15-11:45",
    "12:15-13:45",
    "14:00-15:30",
    "15:45-17:15",
  ];

  const days: DayOfWeek[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  let courseIndex = 0;
  let professorIndex = 0;
  let classroomIndex = 0;

  for (const day of days) {
    for (const timeSlot of timeSlots) {
      schedule.push({
        courseId: courses[courseIndex].id,
        professorId: professors[professorIndex].id,
        classroomNumber: classrooms[classroomIndex].number,
        dayOfWeek: day,
        timeSlot: timeSlot,
      });

      
      courseIndex = (courseIndex + 1) % courses.length;
      professorIndex = (professorIndex + 1) % professors.length;
      classroomIndex = (classroomIndex + 1) % classrooms.length;
    }
  }
}
