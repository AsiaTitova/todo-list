// export const LOG_IN = 'LOG_IN';
// export const LOG_OUT = 'LOG_OUT';
// export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

// function checkCredentials(params) {
//   if (
//     params.email.toLowerCase() !== 'admin' ||
//     params.password !== '12345'
//   ) {
//     return false
//   }

//   return true
// }

// export function logIn(params, cb) {
//   return dispatch => {
//     if (checkCredentials(params)) {
//       dispatch({
//         type: LOG_IN,
//         payload: {
//           name: params.email,
//         },
//       })
//       cb()
//     } else {
//       dispatch({
//         type: LOG_IN_FAILURE,
//         payload: {
//           errorMsg: 'Имя пользователя или пароль введены не верно',
//         },
//         error: true, // https://github.com/redux-utilities/flux-standard-action
//       })
//     }
//   }
// }

// export function logOut() {
//   return {
//     type: LOG_OUT,
//   }
// }
