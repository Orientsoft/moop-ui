import consts from './consts';

const KEY_USER = 'user';

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
