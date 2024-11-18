"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schedule = exports.courses = exports.classrooms = exports.professors = void 0;
exports.addProfessor = addProfessor;
exports.addLesson = addLesson;
exports.reassignClassroom = reassignClassroom;
exports.cancelLesson = cancelLesson;
const validation_1 = require("./validation");
// Масиви даних
exports.professors = [
    { id: 1, name: "John Doe", department: "Mathematics" },
    { id: 2, name: "Jane Smith", department: "Physics" },
    { id: 3, name: "Emily Davis", department: "Chemistry" },
];
exports.classrooms = [
    { number: "101", capacity: 30, hasProjector: true },
    { number: "102", capacity: 25, hasProjector: false },
    { number: "103", capacity: 40, hasProjector: true },
];
exports.courses = [
    { id: 1, name: "Linear Algebra", type: "Lecture" },
    { id: 2, name: "Physics Lab", type: "Lab" },
    { id: 3, name: "Organic Chemistry", type: "Practice" },
];
exports.schedule = [];
// Додавання нового професора
function addProfessor(professor) {
    exports.professors.push(professor);
}
// Додавання нового заняття
function addLesson(lesson) {
    if ((0, validation_1.validateLesson)(lesson) === null) {
        exports.schedule.push(lesson);
        return true;
    }
    return false;
}
// Перепризначення аудиторії
function reassignClassroom(lessonId, newClassroomNumber) {
    const lesson = exports.schedule.find(l => l.courseId === lessonId);
    if (!lesson)
        return false;
    const conflict = (0, validation_1.validateLesson)(Object.assign(Object.assign({}, lesson), { classroomNumber: newClassroomNumber }));
    if (conflict === null) {
        lesson.classroomNumber = newClassroomNumber;
        return true;
    }
    return false;
}
// Скасування заняття
function cancelLesson(lessonId) {
    const index = exports.schedule.findIndex(lesson => lesson.courseId === lessonId);
    if (index !== -1) {
        exports.schedule.splice(index, 1);
    }
}
