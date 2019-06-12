import get from 'lodash-es/get';
import consts from './consts';

const KEY_USER = 'user';
const KEY_TENANT = '__tenant__';

export const setCurrentUser = (user) => {
  if (!user.thumb) {
    if (user.gender === consts.sex.MALE) {
      user.thumb = '/static/images/headerboy.png';
    } else {
      user.thumb = '/static/images/headgirl.png';
    }
  }
  sessionStorage.setItem(KEY_USER, JSON.stringify(user));
};

export const getCurrentUser = () => {
  let user = sessionStorage.getItem(KEY_USER);

  try {
    user = JSON.parse(user);
  } catch (error) {
    user = null;
  }

  return user;
};

export const removeCurrentUser = () => sessionStorage.removeItem(KEY_USER);

export const startCounter = (count, callback) => {
  setTimeout(() => {
    if (count > 0) {
      callback(count - 1);
      startCounter(count - 1, callback);
    }
  }, 1000);
};

export const openURL = (href) => {
  const downloadElement = document.createElement('a');

  downloadElement.href = href;
  downloadElement.target = '_blank';
  downloadElement.click();
};

export const download = (data, filename = '下载') => {
  const href = window.URL.createObjectURL(new Blob([data]));
  const downloadElement = document.createElement('a');

  downloadElement.href = href;
  downloadElement.download = filename;
  downloadElement.click();
  window.URL.revokeObjectURL(href);
};

export const getCourseCover = (course) => {
  let thumb = get(course, 'thumb.thumbnail');

  if (!thumb) {
    let index = 0;

    if (course) {
      const last = parseInt(course.id.split('').reverse()[0], 16) || 0;
      index = last % 3;
    }
    thumb = `/static/images/course-cover.${index}.png`;
  }

  return thumb;
};

export const getCurrentTenant = () => {
  let tenantData = sessionStorage.getItem(KEY_TENANT);
  try {
    tenantData = JSON.parse(tenantData);
  } catch (error) {
    tenantData = null;
  }

  return tenantData;
};

export const setCurrentTenant = (tenantData) => {
  sessionStorage.setItem(KEY_TENANT, JSON.stringify(tenantData));
};

export const removeCurrentTenant = () => sessionStorage.removeItem(KEY_TENANT);
