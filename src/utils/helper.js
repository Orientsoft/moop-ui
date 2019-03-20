const KEY_USER = 'user';

export const setCurrentUser = (user) => {
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