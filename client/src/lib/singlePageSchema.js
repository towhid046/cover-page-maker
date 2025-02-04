import { z } from 'zod';

export const SINGLE_PAGE_SCHEMA = z.object({
    varsityName: z.string().trim().nonempty('Select Your University'),
    assignmentTitle: z.string().trim().nonempty('Assignment Title can not be empty'),
    courseName: z.string().trim().nonempty('Course Name can not be empty'),
    courseCode: z.string().trim().nonempty('Course Code can not be empty'),
    year: z.string().trim().nonempty('Select Your Year'),
    semester: z.string().trim().nonempty('Select Your Semester'),
    session: z.string().trim().nonempty('Select Your Session'),
    submissionDate: z.string().trim().nonempty('Select Your Submission Date'),
    studentName: z.string().trim().nonempty('Student Name can not be empty'),
    studentId: z.string().trim().nonempty('Student ID can not be empty'),
    studentDepartment: z.string().trim().nonempty('Select Your Student Department'),
    teacherName: z.string().trim().nonempty('Teacher Name can not be empty'),
    teacherTitle: z.string().trim().nonempty('Select Your Teacher Title'),
    teacherDepartment: z.string().trim().nonempty('Select Your Teacher Department'),
});
