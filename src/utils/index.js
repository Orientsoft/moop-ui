import consts from './consts';

export const isTeacher = user => user && user.role === consts.user.TEACHER;

export default {
  isTeacher,
};
