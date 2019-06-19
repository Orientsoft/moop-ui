export default {
  user: {
    ADMIN: 0,
    SUPER: 1,
    CONTRIBUTOR: 2,
    TEACHER: 3,
    STUDENT: 4,
  },
  sex: {
    MALE: 0,
    FEMALE: 1,
  },
  titles: ['助教', '讲师', '教授'],
  scores: { 4.33: 'A+', 4: 'A', 3: 'B', 2: 'C', 1: 'D' },
  status: [
    { label: '未发布', value: 0 },
    { label: '已发布', value: 1 },
  ],
};
