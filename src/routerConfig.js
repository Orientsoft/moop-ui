import { lazy } from 'react';
import Home from '@/pages/Home';
import Courses from '@/pages/Courses';
import Flow from '@/pages/Flow';
import Classroom from '@/pages/Classroom';
// import UserProfile from '@/pages/User/Profile';
import UserCourses from '@/pages/User/Courses';
// import ClassroomDetail from '@/pages/ClassroomDetail';
// import ClassroomLab from '@/pages/ClassroomLab';
// import ClassroomCreateDetail from '@/pages/ClassroomCreateDetail';
// import CreateClassroom from '@/pages/CreateClassroom';
// import EditClassroom from '@/pages/EditClassroom';
// import StudentReport from '@/pages/StudentReport';
// import StudentReportEdit from '@/pages/StudentReportEdit';
// import TeacherIntroduction from '@/pages/TeacherIntroduction';
// import Help from '@/pages/Help';
// import About from '@/pages/About';
// import ContactUs from '@/pages/ContactUs';
import TenantDashboard from '@/tenant/pages/Dashboard';
// import TenantProject from '@/tenant/pages/Project';
// import TenantCourses from '@/tenant/pages/Courses';
// import TenantTags from '@/tenant/pages/Tag';
// import TenantTenant from '@/tenant/pages/Tenant';
// import TenantTeacher from '@/tenant/pages/Teacher';
// import TenantStudent from '@/tenant/pages/Student';
// import TenantContributor from '@/tenant/pages/Contributor';
import ContributorDashboard from '@/contributor/pages/Dashboard';
// import ContributorCreate from '@/contributor/pages/Create';
// import ContributorResetPassword from '@/contributor/pages/ResetPassword';

export const tenantRoutes = [
  {
    path: '/tenant/dashboard',
    component: TenantDashboard,
  },
  {
    path: '/tenant/project',
    component: lazy(() => import('@/tenant/pages/Project')),
  },
  {
    path: '/tenant/courses',
    component: lazy(() => import('@/tenant/pages/Courses')),
  },
  {
    path: '/tenant/tags',
    component: lazy(() => import('@/tenant/pages/Tag')),
  },
  {
    path: '/tenant/tenant',
    component: lazy(() => import('@/tenant/pages/Tenant')),
  },
  {
    path: '/tenant/teacher',
    component: lazy(() => import('@/tenant/pages/Teacher')),
  },
  {
    path: '/tenant/student',
    component: lazy(() => import('@/tenant/pages/Student')),
  },
  {
    path: '/tenant/contributor',
    component: lazy(() => import('@/tenant/pages/Contributor')),
  },
];

export const contributorRoutes = [
  {
    path: '/contributor/dashboard',
    component: ContributorDashboard,
  },
  {
    path: '/contributor/create',
    component: lazy(() => import('@/contributor/pages/Create')),
  },
  {
    path: '/contributor/password',
    component: lazy(() => import('@/contributor/pages/ResetPassword')),
  },
];

const routerConfig = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/courses',
    component: Courses,
  },
  {
    path: '/classroom',
    component: Classroom,
  },
  {
    path: '/flow',
    component: Flow,
  },
  {
    path: '/users/profile',
    component: lazy(() => import('@/pages/User/Profile')),
  },
  {
    path: '/users/courses',
    component: UserCourses,
  },
  {
    path: '/classroomdetail',
    component: lazy(() => import('@/pages/ClassroomDetail')),
  },
  {
    path: '/classroomlab',
    component: lazy(() => import('@/pages/ClassroomLab')),
  },
  {
    path: '/classroomcreatedetail',
    component: lazy(() => import('@/pages/ClassroomCreateDetail')),
  },
  {
    path: '/createclassroom',
    component: lazy(() => import('@/pages/CreateClassroom')),
  },
  {
    path: '/editclassroom',
    component: lazy(() => import('@/pages/EditClassroom')),
  },
  {
    path: '/studentreport',
    component: lazy(() => import('@/pages/StudentReport')),
  },
  {
    path: '/studentreportedit',
    component: lazy(() => import('@/pages/StudentReportEdit')),
  },
  {
    path: '/teacherintroduction',
    component: lazy(() => import('@/pages/TeacherIntroduction')),
  },
  {
    path: '/help',
    component: lazy(() => import('@/pages/Help')),
  },
  {
    path: '/about',
    component: lazy(() => import('@/pages/About')),
  },
  {
    path: '/contactus',
    component: lazy(() => import('@/pages/ContactUs')),
  },
  ...tenantRoutes,
  ...contributorRoutes,
];

export default routerConfig;
