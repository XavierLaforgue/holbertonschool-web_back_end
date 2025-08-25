export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      return {
        body: 'success',
        status: 200,
      };
    })
    .catch(() => { throw new Error(); })
    .finally(() => {
      console.log('Got a response from the API');
    });
  // promise
  //   .then(() => {
  //     return {
  //       status: 200,
  //       body: 'success',
  //     };
  //   })
  //   .catch(() => (new Error()))
  //   .finally(console.log('Got a response from the API'));
}
