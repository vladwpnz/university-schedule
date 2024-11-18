"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLesson = validateLesson;
const data_1 = require("./data");
function validateLesson(lesson) {
    const conflicts = data_1.schedule.filter(existingLesson => existingLesson.dayOfWeek === lesson.dayOfWeek &&
        existingLesson.timeSlot === lesson.timeSlot &&
        (existingLesson.professorId === lesson.professorId ||
            existingLesson.classroomNumber === lesson.classroomNumber));
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
