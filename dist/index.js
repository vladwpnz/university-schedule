"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printSchedule = printSchedule;
const populateSchedule_1 = require("./populateSchedule"); // Імпорт функції для створення розкладу
const data_1 = require("./data"); // Імпорт даних і нових функцій
const analysis_1 = require("./analysis"); // Імпорт функцій аналізу
// Функція для виведення всього розкладу
function printSchedule() {
    console.log("University Schedule:\n");
    // Дні тижня
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    for (const day of daysOfWeek) {
        console.log(`--- ${day} ---`);
        const lessonsForDay = data_1.schedule.filter(lesson => lesson.dayOfWeek === day);
        if (lessonsForDay.length === 0) {
            console.log("No lessons scheduled for this day.");
        }
        else {
            lessonsForDay.forEach(lesson => {
                const course = data_1.courses.find(c => c.id === lesson.courseId);
                const professor = data_1.professors.find(p => p.id === lesson.professorId);
                const classroom = data_1.classrooms.find(c => c.number === lesson.classroomNumber);
                console.log(`Time: ${lesson.timeSlot}, Course: ${course === null || course === void 0 ? void 0 : course.name} (${course === null || course === void 0 ? void 0 : course.type}), Professor: ${professor === null || professor === void 0 ? void 0 : professor.name}, Classroom: ${classroom === null || classroom === void 0 ? void 0 : classroom.number}`);
            });
        }
        console.log(""); // Порожній рядок для розділення днів
    }
}
// Створення розкладу
(0, populateSchedule_1.populateSchedule)();
// Виведення початкового розкладу
console.log("Initial Schedule:");
printSchedule();
// Перепризначення аудиторії
console.log("\nReassigning classroom for course 1 to 102...");
if ((0, data_1.reassignClassroom)(1, "102")) {
    console.log("Classroom reassigned!");
}
else {
    console.log("Failed to reassign classroom.");
}
// Виведення оновленого розкладу після перепризначення
console.log("\nSchedule after reassigning classroom:");
printSchedule();
// Скасування заняття
console.log("\nCanceling lesson for course 2...");
(0, data_1.cancelLesson)(2);
// Виведення розкладу після скасування заняття
console.log("\nSchedule after canceling lesson:");
printSchedule();
// Аналіз використання аудиторій
console.log("\nClassroom Utilization for 101:", (0, analysis_1.getClassroomUtilization)("101") + "%");
console.log("Most Popular Course Type:", (0, analysis_1.getMostPopularCourseType)());
