import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName, lastName, fileName,
) {
  return Promise.allSettled(
    [signUpUser(firstName, lastName), uploadPhoto(fileName)],
  ).then((results) => {
    const resultsClean = results.map((result) => {
      if (result.status === 'rejected') {
        return {
          status: result.status,
          value: `Error: ${result.reason.message}`,
        };
      }
      return {
        status: result.status,
        value: result.value,
      };
    });
    return resultsClean;
  });
}

// export default function handleProfileSignup(firstName, lastName, fileName) {
//   return Promise.allSettled(
//     [signUpUser(firstName, lastName), uploadPhoto(fileName)],
//   ).then((results) => {
//     results.map((result) => {
//       if (result.status === 'rejected') {
//         return {
//           status: 'rejected',
//           value: `Error: ${result.reason.message}`,
//         };
//       }
//       return result;
//     });
//   });
// }
