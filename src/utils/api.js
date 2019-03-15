import axios from 'axios';
import { GET, POST, PATCH, DELETE } from '@pixcai/make-api';

axios.defaults.timeout = 30000;
axios.defaults.baseURL = 'http://192.168.0.48:7777/api/v1';
axios.defaults.withCredentials = true;

export const user = {
  login: POST('/login'),
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
