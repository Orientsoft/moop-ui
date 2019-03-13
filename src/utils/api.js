import axios from 'axios';
import merge from 'lodash-es/merge';

axios.defaults.timeout = 30000;
axios.defaults.baseURL = 'http://192.168.0.48:7777/api/v1';
axios.defaults.withCredentials = true;

const api = (defaultConfig = {}) => {
  const parts = defaultConfig.url.match(/(?<=:)\w+/g);

  if (parts && parts.length) {
    return (args = {}, config) => axios(merge(defaultConfig, config, {
      url: parts.reduce((value, part) => value.replace(`:${part}`, args[part]), defaultConfig.url),
    }));
  }

  return config => axios(merge(defaultConfig, config));
};

export const GET = url => api({ url, method: 'GET' });
export const POST = url => api({ url, method: 'POST' });
export const PUT = url => api({ url, method: 'PUT' });
export const PATCH = url => api({ url, method: 'PATCH' });
export const DELETE = url => api({ url, method: 'DELETE' });

export const user = {
  select: GET('/users/:userId'),
  create: POST('/users'),
  update: PATCH('/users/:userId'),
  delete: DELETE('/users/:userId'),
  selectAll: GET('/users'),
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
  selectAll: GET('/classrooms'),
  selectMine: GET('/classrooms/mine'),
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
};

export const report = {
  select: GET('/reports/:reportId'),
  create: POST('/reports'),
  update: PATCH('/reports/:reportId'),
  delete: DELETE('/reports/:reportId'),
  selectAll: GET('/reports'),
};
