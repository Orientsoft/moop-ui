import Home from '@/pages/Home';
import Courses from '@/pages/Courses';
import Classroom from '@/pages/Classroom';
import UserProfile from '@/pages/User/Profile';
import UserCourses from '@/pages/User/Courses';
import ClassroomDetail from '@/pages/ClassroomDetail';
import ClassroomLab from '@/pages/ClassroomLab';
import ClassroomCreateDetail from '@/pages/ClassroomCreateDetail';
import CreateClassroom from '@/pages/CreateClassroom';
import EditClassroom from '@/pages/EditClassroom';
import StudentReport from '@/pages/StudentReport';
import StudentReportEdit from '@/pages/StudentReportEdit';
import TeacherIntroduction from '@/pages/TeacherIntroduction';
import Help from '@/pages/Help';
import About from '@/pages/About';
import ContactUs from '@/pages/ContactUs';
import TenantDashboard from '@/tenant/pages/Dashboard';
import TenantProject from '@/tenant/pages/Project';
import TenantCourses from '@/tenant/pages/Courses';
import TenantTags from '@/tenant/pages/Tag';
import TenantTenant from '@/tenant/pages/Tenant';
import TenantTeacher from '@/tenant/pages/Teacher';
import TenantStudent from '@/tenant/pages/Student';
import TenantWhiteList from '@/tenant/pages/WhiteList';
import TenantContributor from '@/tenant/pages/Contributor';
import ContributorDashboard from '@/contributor/pages/Dashboard';
import ContributorCreate from '@/contributor/pages/Create';
// import ContributorResetPassword from '@/contributor/pages/ResetPassword';

export const tenantRoutes = [
  {
    path: '/tenant/dashboard',
    component: TenantDashboard,
  },
  {
    path: '/tenant/project',
    component: TenantProject,
  },
  {
    path: '/tenant/courses',
    component: TenantCourses,
  },
  {
    path: '/tenant/tags',
    component: TenantTags,
  },
  {
    path: '/tenant/tenant',
    component: TenantTenant,
  },
  {
    path: '/tenant/teacher',
    component: TenantTeacher,
  },
  {
    path: '/tenant/student',
    component: TenantStudent,
  },
  {
    path: '/tenant/contributor',
    component: TenantContributor,
  },
  {
    path: '/tenant/whitelist',
    component: TenantWhiteList,
  },
];

export const contributorRoutes = [
  {
    path: '/contributor/dashboard',
    component: ContributorDashboard,
  },
  {
    path: '/contributor/create',
    component: ContributorCreate,
  },
  // {
  //   path: '/contributor/password',
  //   component: ContributorResetPassword,
  // },
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
    path: '/users/profile',
    component: UserProfile,
  },
  {
    path: '/users/courses',
    component: UserCourses,
  },
  {
    path: '/classroomdetail',
    component: ClassroomDetail,
  },
  {
    path: '/classroomlab',
    component: ClassroomLab,
  },
  {
    path: '/classroomcreatedetail',
    component: ClassroomCreateDetail,
  },
  {
    path: '/createclassroom',
    component: CreateClassroom,
  },
  {
    path: '/editclassroom',
    component: EditClassroom,
  },
  {
    path: '/studentreport',
    component: StudentReport,
  },
  {
    path: '/studentreportedit',
    component: StudentReportEdit,
  },
  {
    path: '/teacherintroduction',
    component: TeacherIntroduction,
  },
  {
    path: '/help',
    component: Help,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contactus',
    component: ContactUs,
  },
  ...tenantRoutes,
  ...contributorRoutes,
];

export default routerConfig;
