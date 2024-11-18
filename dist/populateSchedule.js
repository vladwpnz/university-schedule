"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateSchedule = populateSchedule;
const data_1 = require("./data");
function populateSchedule() {
    const timeSlots = [
        "8:30-10:00",
        "10:15-11:45",
        "12:15-13:45",
        "14:00-15:30",
        "15:45-17:15",
    ];
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let courseIndex = 0;
    let professorIndex = 0;
    let classroomIndex = 0;
    for (const day of days) {
        for (const timeSlot of timeSlots) {
            data_1.schedule.push({
                courseId: data_1.courses[courseIndex].id,
                professorId: data_1.professors[professorIndex].id,
                classroomNumber: data_1.classrooms[classroomIndex].number,
                dayOfWeek: day,
                timeSlot: timeSlot,
            });
            // Перемикаємося на наступні курси, професорів та аудиторії
            courseIndex = (courseIndex + 1) % data_1.courses.length;
            professorIndex = (professorIndex + 1) % data_1.professors.length;
            classroomIndex = (classroomIndex + 1) % data_1.classrooms.length;
        }
    }
}
