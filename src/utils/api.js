import API, { GET, POST, PATCH, DELETE } from '@pixcai/make-api';
import { Message } from '@alifd/next';
import { removeCurrentUser } from './helper';

API.request.defaults.timeout = 60000;
API.request.defaults.baseURL = '/api/v1';
API.request.defaults.withCredentials = true;

API.request.interceptors.response.use(response => response, (error) => {
  if (error.status >= 500) {
    Message.error('内部错误，请联系网站管理员');
  } else if (error.status === 403) {
    removeCurrentUser();
    user.logout().then(() => location.href = '/users/login');
  } else if (error.response) {
    Message.error(error.response.data);
  }
  return Promise.reject(error);
});

export const IMAGE_UPLOAD_URL = `${API.request.defaults.baseURL}/thumb`;
export const FILE_UPLOAD_URL = `${API.request.defaults.baseURL}/upload`;
export const STUDENT_UPLOAD_URL = `${API.request.defaults.baseURL}/classrooms/upload`;
export const DATA_UPLOAD_URL = `${API.request.defaults.baseURL}/data/upload`;

export const makeMarkdownUploadUrl = classroomId => `${API.request.defaults.baseURL}/classrooms/${classroomId}/publication/markdown`;

export const captcha = {
  refresh: GET('/captcha'),
};

export const user = {
  login: POST('/login'),
  logout: GET('/logout'),
  select: GET('/users/:userId'),
  create: POST('/users'),
  update: PATCH('/users/:userId'),
  delete: DELETE('/users/:userId'),
  selectAll: GET('/users'),
  sendVerifyCode: POST('/verifycode'),
  updateMobile: POST('/users/phone'),
};

export const tenant = {
  select: GET('/tenants/:tenantId'),
  create: POST('/tenants'),
  update: PATCH('/tenants/:tenantId'),
  delete: DELETE('/tenants/:tenantId'),
  selectAll: GET('/tenants'),
};

export const project = {
  select: GET('/projects/:projectId'),
  create: POST('/projects'),
  update: PATCH('/projects/:projectId'),
  delete: DELETE('/projects/:projectId'),
  selectAll: GET('/projects'),
  categories: GET('/projects/tag'),
};

export const purchase = {
  select: GET('/purchases/:purchaseId'),
  create: POST('/purchases/:purchaseId'),
  update: PATCH('/purchases/:purchaseId'),
  delete: DELETE('/purchases/:purchaseId'),
  selectAll: GET('/purchases'),
};

export const classroom = {
  select: GET('/classrooms/:classroomId'),
  create: POST('/classrooms'),
  update: PATCH('/classrooms/:classroomId'),
  delete: DELETE('/classrooms/:classroomId'),
  selectAll: GET('/classrooms?embed=1'),
  selectMine: GET('/classrooms/mine?embed=1'),
  selectPublic: GET('/classrooms/public'),
};

export const invitation = {
  select: GET('/invitations/:invitationId'),
  create: POST('/invitations'),
  update: PATCH('/invitations/:invitationId'),
  delete: DELETE('/invitations/:invitationId'),
  selectAll: GET('/invitations'),
  createBatch: POST('/invitations/batch'),
};

export const progress = {
  select: GET('/progresses/:progressId'),
  create: POST('/progresses'),
  delete: DELETE('/progresses/:progressId'),
  selectAll: GET('/progresses'),
  getStudents: GET('/progress/teacher'),
};

export const report = {
  select: GET('/reports/:reportId'),
  create: POST('/reports'),
  update: PATCH('/reports/:reportId'),
  delete: DELETE('/reports/:reportId'),
  selectAll: GET('/reports'),
};

export const tag = {
  selectAll: GET('/tag'),
};

export const publication = {
  select: GET('/classrooms/:classroomId/publication'),
  create: POST('/classrooms/:classroomId/publication'),
  update: PATCH('/classrooms/:classroomId/publication'),
  delete: DELETE('/classrooms/:classroomId/publication'),
};

export const container = {
  start: POST('/container'),
  stop: DELETE('/container'),
  getDataFiles: GET('/data/list'),
};
