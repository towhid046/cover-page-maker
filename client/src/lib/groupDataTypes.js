import PropTypes from 'prop-types'
const stringType = PropTypes.string.isRequired

export const GROUP_DATA_TYPES = {
    item: PropTypes.shape({
        varsityName: stringType,
        assignmentTitle: stringType,
        courseName: stringType,
        courseCode: stringType,
        year: stringType,
        semester: stringType,
        session: stringType,
        submissionDate: stringType,
        groupNumber: stringType,
        studentIds: PropTypes.arrayOf(stringType),
        studentDepartment: stringType,
        teacherName: stringType,
        teacherTitle: stringType,
        teacherDepartment: stringType,
    }).isRequired,
}