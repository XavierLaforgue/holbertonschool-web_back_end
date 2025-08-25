import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([res1, res2]) => {
      console.log(`${res1.body} ${res2.firstName} ${res2.lastName}`);
    })
    .catch(() => { console.log('Signup system offline'); });
}
