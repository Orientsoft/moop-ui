import API, { GET, POST, PATCH, DELETE } from '@pixcai/make-api';
import isPlainObject from 'lodash-es/isPlainObject';
import Notification from '@icedesign/notification';
import { getCurrentUser, removeCurrentUser, removeCurrentTenant } from './helper';

API.request.defaults.timeout = 600000;
API.request.defaults.baseURL = '/api/v1';
API.request.defaults.withCredentials = true;

API.request.interceptors.response.use((response) => {
  if (response.headers.login_status === 'False') {
    if (getCurrentUser()) {
      user.logout();
      removeCurrentUser();
      removeCurrentTenant();
      location.href = `/login?from=${encodeURIComponent(location.href.replace(location.origin, ''))}`;
      return Promise.reject();
    }
  }
  return response;
}, (error) => {
  if (error.status >= 500) {
    Notification.error({
      message: '内部错误',
      description: '请联系网站管理员',
    });
  } else if (error.response) {
    if (error.response.status === 403) {
      if (getCurrentUser()) {
        user.logout();
      }
      removeCurrentUser();
      removeCurrentTenant();
      location.href = `/login?from=${encodeURIComponent(location.href.replace(location.origin, ''))}`;
    } else {
      Notification.error({
        duration: 2.5,
        message: '错误',
        description: error.response.data,
      });
    }
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
  resetPassword: POST('/reset/pwd'),
};

export const tenant = {
  select: GET('/tenants/:tenantId'),
  create: POST('/tenants'),
  update: PATCH('/tenants/:tenantId'),
  delete: DELETE('/tenants/:tenantId'),
  selectAll: GET('/tenants'),
  current: GET('/tenant'),
};

export const project = {
  select: GET('/projects/:projectId'),
  create: POST('/projects'),
  update: PATCH('/projects/:projectId'),
  delete: DELETE('/projects/:projectId'),
  selectAll: GET('/projects'),
  categories: GET('/projects/tag'),
  rename: PATCH('/classroom/update_project'),
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
  restart: POST('/classrooms/restart'),
  getStatus: GET('/edit_status'),
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
  select: GET('/report/:reportId'),
  create: POST('/reports'),
  update: PATCH('/reports/:reportId'),
  delete: DELETE('/reports/:reportId'),
  selectAll: GET('/reports'),
  buildPreviewURL: id => `${API.request.defaults.baseURL}/classroom/report/preview/${id}`,
  buildDownloadURL: id => `${API.request.defaults.baseURL}/classroom/report/download/${id}`,
};

export const tag = {
  selectAll: GET('/tag'),
  create: POST('/tag'),
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
  commitHomework: POST('/homework'),
};
