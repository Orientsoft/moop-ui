import Home from '@/pages/Home';
import Courses from '@/pages/Courses';
import Classroom from '@/pages/Classroom';
import UserProfile from '@/pages/User/Profile';
import UserCourses from '@/pages/User/Courses';
import ClassroomDetail from '@/pages/ClassroomDetail';
import ClassroomCreateDetail from '@/pages/ClassroomCreateDetail';
import CreateClassroom from '@/pages/CreateClassroom';
import StudentReport from '@/pages/StudentReport';
import StudentReportEdit from '@/pages/StudentReportEdit';


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
    path: '/user/profile',
    component: UserProfile,
  },
  {
    path: '/user/courses',
    component: UserCourses,
  },
  {
    path: '/classroomdetail',
    component: ClassroomDetail,
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
    path: '/studentreport',
    component: StudentReport,
  },
  {
    path: '/studentreportedit',
    component: StudentReportEdit,
  },
];

export default routerConfig;
