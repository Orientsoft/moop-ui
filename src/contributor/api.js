import API, { GET, POST, PATCH, DELETE } from '@pixcai/make-api';

export const contributor = {
  create: POST('/projects'),
  select: GET('/projects/mine'),
  update: PATCH('/projects/:projectId'),
  delete: DELETE('/projects/:projectId'),
  selectTags: GET('/projects/tag'),
  selectImages: GET('/projects/image'),
  test: POST('/management/test'),
  close: POST('/management/close'),
};

export const logout = GET('/logout');

export const IMAGE_UPLOAD_URL = `${API.request.defaults.baseURL}/thumb`;

export default { contributor, logout, IMAGE_UPLOAD_URL };
