import API, { GET, POST, PATCH, DELETE } from '@pixcai/make-api';

export const dashboard = {
  classroom: GET('/dashboard/classroom'),
  total: GET(' /dashboard/classroom/total'),
  teaching: GET('/dashboard/classroom/teaching'),
  teacher: GET('/dashboard/user/teacher'),
  student: GET('/dashboard/user/student'),
  projectList: GET('/dashboard/project_list'),
};

export const teacher = {
  create: POST('/management/teacher'),
  select: GET('/management/teacher'),
  update: PATCH('/management/teacher'),
  delete: DELETE('/management/teacher'),
  resetPassword: GET('/management/reset'),
};

export const student = {
  UPLOAD_URL: `${API.request.defaults.baseURL}/management/student`,
  select: GET('/management/student'),
  update: PATCH('/management/student'),
  delete: DELETE('/management/student'),
  resetPassword: GET('/management/reset'),
};

export const tenant = {
  select: GET('/tenant?embed=1'),
  update: PATCH('/tenants/:tenantId/custom'),
  resetPassword: GET('/management/reset'),
};

export const contributor = {
  select: GET('/management/contributor'),
  create: POST('/management/contributor'),
  delete: DELETE('/management/contributor'),
  resetPassword: GET('/management/reset'),
};

export const login = POST('/login');
export const logout = GET('/logout');

export const IMAGE_UPLOAD_URL = `${API.request.defaults.baseURL}/thumb`;

export default { teacher, student, tenant, login, logout, IMAGE_UPLOAD_URL };
