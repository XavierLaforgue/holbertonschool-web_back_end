export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .then((response) => {
      console.log('Got a response from the API');
      return response;
    })
    .catch(() => new Error());
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
