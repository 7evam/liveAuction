
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
    update(id, price) {
      return instance.put(`/${id}`, { item: price })
        .catch((e) => { throw e; });
    },
     updateAfter(id, price) {
      return instance.put(`/${id}/${price}`, { item: price })
        .catch((e) => { throw e; });
    },
      resetItems() {
        return instance.put('/reset')
          .catch((e) => {throw e; });
      }
    // addToAuction(id){
    //   return instance.put(`/${id}`, { item.upForAuction: true })
    //   .catch((e) => { throw e; });
    // }

  };
};

