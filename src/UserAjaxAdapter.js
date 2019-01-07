import axios from  'axios';

export default (baseURL) => {
  const instance = axios.create({
    baseURL,
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
  });

  return {
    index() {
      return instance.get('/')
        .then(({ data: { users } }) => users)
        .catch((e) => { throw e; });
    },
    read(id) {
      return instance.get(`/${id}`)
        .then(({ data: { users } }) => users)
        .catch((e) => { throw e; });
    },
    update(id, newBalance) {
      return instance.put(`/${id}/${newBalance}`)
        .catch((e) => { throw e; });
    },
    resetUsers() {
      return instance.put(`/reset`)
        .catch((e) => { throw e; });
    },
  };
};
