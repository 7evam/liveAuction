import axios from  'axios';

export default (baseURL) => {
  const instance = axios.create({
    baseURL,
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
  });

  return {
    read(id) {
      return instance.get(`/${id}`)
        .then(({ data: { users } }) => users)
        .catch((e) => { throw e; });
    },
    update(id, price) {
      return instance.put(`/${id}`, { item: price })
        .catch((e) => { throw e; });
    },
  };
};
