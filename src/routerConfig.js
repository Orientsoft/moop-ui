// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BlankLayout from './layouts/BlankLayout';
import Help from './pages/Help';
import ClassroomList from './pages/ClassroomList';
import ClassroomDetail from './pages/ClassroomDetail';
import ClassroomCreation from './pages/ClassroomCreation';
import ClassroomPublication from './pages/ClassroomPublication';
import ClassroomPresentation from './pages/ClassroomPresentation';
import ClassroomPresentationEdit from './pages/ClassroomPresentationEdit';
import UserRegister from './pages/UserRegister';
import UserLogin from './pages/UserLogin';
import UserProfile from './pages/UserProfile';
import UserMyclassroom from './pages/UserMyclassroom';
import UserTeacher from './pages/UserTeacher';
import UserTeacherClassroom from './pages/UserTeacherClassroom';

import Home from './pages/Home';

const routerConfig = [
  {
    path: '/classroom/publication',
    layout: BlankLayout,
    component: ClassroomPublication,
  },
  {
    path: '/home',
    layout: BlankLayout,
    component: Home,
  },
  {
    path: '/classroom/list',
    layout: BlankLayout,
    component: ClassroomList,
  },
  {
    path: '/classroom/detail',
    layout: BlankLayout,
    component: ClassroomDetail,
  },
  {
    path: '/classroom/creation',
    layout: BlankLayout,
    component: ClassroomCreation,
  },
  {
    path: '/help',
    layout: BlankLayout,
    component: Help,
  },
  {
    path: '/classroom/presentation',
    layout: BlankLayout,
    component: ClassroomPresentation,
  },
  {
    path: '/classroom/presentationedit',
    layout: BlankLayout,
    component: ClassroomPresentationEdit,
  },
  {
    path: '/userteacher',
    layout: BlankLayout,
    component: UserTeacher,
  },
  {
    path: '/user/register',
    layout: BlankLayout,
    component: UserRegister,
  },
  {
    path: '/user/login',
    layout: BlankLayout,
    component: UserLogin,
  },
  {
    path: '/user/profile',
    layout: BlankLayout,
    component: UserProfile,
  },
  {
    path: '/user/myclassroom',
    layout: BlankLayout,
    component: UserMyclassroom,
  },
  {
    path: '/userteacherclassroom',
    layout: BlankLayout,
    component: UserTeacherClassroom,
  },
];

export default routerConfig;
