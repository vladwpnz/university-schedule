"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClassroomUtilization = getClassroomUtilization;
exports.getMostPopularCourseType = getMostPopularCourseType;
const data_1 = require("./data");
function getClassroomUtilization(classroomNumber) {
    const totalSlots = 5 * 5; // 5 днів по 5 слотів
    const usedSlots = data_1.schedule.filter(lesson => lesson.classroomNumber === classroomNumber).length;
    return (usedSlots / totalSlots) * 100;
}
function getMostPopularCourseType() {
    const counts = data_1.courses.reduce((acc, course) => {
        acc[course.type] = (acc[course.type] || 0) + 1;
        return acc;
    }, {});
    // Якщо немає курсів, повертаємо null
    if (Object.keys(counts).length === 0) {
        return null;
    }
    return Object.entries(counts).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
}
