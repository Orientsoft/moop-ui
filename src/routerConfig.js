import Home from '@/pages/Home';
import Courses from '@/pages/Courses';
import Classroom from '@/pages/Classroom';
import UserProfile from '@/pages/User/Profile';
import UserCourses from '@/pages/User/Courses';

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
];

export default routerConfig;
