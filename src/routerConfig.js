import Home from '@/pages/Home';
import Courses from '@/pages/Courses';
import Classroom from '@/pages/Classroom';
import UserProfile from '@/pages/User/Profile';
import UserCourses from '@/pages/User/Courses';
import ClassroomDetail from '@/pages/ClassroomDetail';
import ClassroomCreateDetail from '@/pages/ClassroomCreateDetail';
import CreateClassroom from '@/pages/CreateClassroom';
import EditClassroom from '@/pages/EditClassroom';
import StudentReport from '@/pages/StudentReport';
import StudentReportEdit from '@/pages/StudentReportEdit';
import TeacherIntroduction from '@/pages/TeacherIntroduction';
import Help from '@/pages/Help';

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
];

export default routerConfig;
