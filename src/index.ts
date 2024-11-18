import { populateSchedule } from "./populateSchedule"; 
import { schedule, courses, professors, classrooms, reassignClassroom, cancelLesson } from "./data"; 
import { getClassroomUtilization, getMostPopularCourseType } from "./analysis"; 

// Функція для виведення всього розкладу
export function printSchedule(): void {
  console.log("University Schedule:\n");

  // Дні тижня
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  for (const day of daysOfWeek) {
    console.log(`--- ${day} ---`);
    const lessonsForDay = schedule.filter(lesson => lesson.dayOfWeek === day);

    if (lessonsForDay.length === 0) {
      console.log("No lessons scheduled for this day.");
    } else {
      lessonsForDay.forEach(lesson => {
        const course = courses.find(c => c.id === lesson.courseId);
        const professor = professors.find(p => p.id === lesson.professorId);
        const classroom = classrooms.find(c => c.number === lesson.classroomNumber);

        console.log(
          `Time: ${lesson.timeSlot}, Course: ${course?.name} (${course?.type}), Professor: ${professor?.name}, Classroom: ${classroom?.number}`
        );
      });
    }

    console.log(""); 
  }
}

// Створення розкладу
populateSchedule();

// Виведення початкового розкладу
console.log("Initial Schedule:");
printSchedule();

// Перепризначення аудиторії
console.log("\nReassigning classroom for course 1 to 102...");
if (reassignClassroom(1, "102")) {
  console.log("Classroom reassigned!");
} else {
  console.log("Failed to reassign classroom.");
}

// Виведення оновленого розкладу після перепризначення
console.log("\nSchedule after reassigning classroom:");
printSchedule();

// Скасування заняття
console.log("\nCanceling lesson for course 2...");
cancelLesson(2);

// Виведення розкладу після скасування заняття
console.log("\nSchedule after canceling lesson:");
printSchedule();

// Аналіз використання аудиторій
console.log("\nClassroom Utilization for 101:", getClassroomUtilization("101") + "%");
console.log("Most Popular Course Type:", getMostPopularCourseType());