import axios from  'axios';

export default (baseURL) => {
  const instance = axios.create({
    baseURL,
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
  });

  return {

    read() {
      return instance.get('/')
        .then(({ data: { items } }) => items)
        .catch((e) => { throw e; });
    },
    update(id, data) {
      return instance.put(`/${id}`, { item: data })
        .catch((e) => { throw e; });
    },
    // addToAuction(id){
    //   return instance.put(`/${id}`, { item.upForAuction: true })
    //   .catch((e) => { throw e; });
    // }

  };
};

