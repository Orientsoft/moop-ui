const headerMenuConfig = [
  {
    path: '/',
    name: '首页',
  },
  {
    path: '/courses',
    name: '实验',
  },
];

const asideMenuConfig = [
  {
    name: '首页',
    path: '/tenant',
    icon: 'home',
  },
  {
    name: '教学管理',
    path: '/tenant/project',
    icon: 'shezhi',
  },
  {
    name: '课程统计',
    path: '/tenant/courses',
    icon: 'material',
  },
  {
    name: '专题分类管理',
    path: '/tenant/tags',
    icon: 'shezhi',
  },
  {
    name: '租户信息管理',
    path: '/tenant/tenant',
    icon: 'yonghu',
  },
  {
    name: '教师账号管理',
    path: '/tenant/teacher',
    icon: 'material',
  },
  {
    name: '学生账号管理',
    path: '/tenant/student',
    icon: 'fans2',
  },
  {
    name: '贡献者账号管理',
    path: '/tenant/contributor',
    icon: 'yonghu',
  },
];

export { headerMenuConfig, asideMenuConfig };
