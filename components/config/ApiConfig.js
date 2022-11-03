// //import EncryptedStorage from "react-native-encrypted-storage";
// //import { AsyncStorage } from 'react-native';
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const apiCall = async (url, body, method) => {
//   const token = await AsyncStorage.getItem("accessToken");
//  // const refreshToken = await AsyncStorage.getItem("refreshToken");

//   console.log(url,token, "url","token");

// //   if (!token) {
// //     token = await AsyncStorage.getItem("accessToken");
// //   }
// //   console.log("Token", token);

//   //const timezoneOffset = new Date().getTimezoneOffset();
//   const headers = {
//     // Accept: 'application/json',
//     "Content-Type": "application/json",
    
//   };
//   if (token) {
//     headers["access_token"] = token;
//   }
//   return fetch(url, {
//     method: method,
//     headers,
//     body: body ? JSON.stringify(body) : null,
//   })
//     .then((response) => {
//       return new Promise(function (resolve, reject) {
//         response
//           .json()
//           .then((responseParsed) => {
//             if (
//               response?.status == 200 ||
//               response?.status == 201 ||
//               response?.status == 204
//             ) {
//               if (
//                 responseParsed?.statusCode == 200 ||
//                 responseParsed?.statusCode == 201 ||
//                 responseParsed?.statusCode == 204
//               ) {
//                 resolve({
//                   status: responseParsed?.statusCode,
//                   result: responseParsed?.result,
//                   message: responseParsed?.message,
//                 });
//               } else {
//                 if (
//                   responseParsed?.statusCode == 401 ||
//                   responseParsed?.statusCode == 400 ||
//                   responseParsed?.statusCode == 409 ||
//                   responseParsed?.statusCode == 404
//                 ) {
//                   // access token unauthorised
//                   resolve({
//                     status: responseParsed?.statusCode,
//                     result: responseParsed?.result,
//                     message: responseParsed?.message,
//                   });
//                 } else {
//                   resolve({
//                     status: 500,
//                     result: responseParsed?.result,
//                     message: responseParsed?.message,
//                   }); // failed
//                 }
//               }
//             }
//             else {
//               resolve({
//                 status: response?.status,
//                 result: responseParsed?.result,
//                 message: responseParsed?.message ?? 'Something went wrong!',
//               }); // failed
//             }
//           })
//           .catch((err) => {
//             console.log("error in catch in util ", err.message);
//             resolve({
//               status: response?.status,
//               result: response,
//             });
//           });
//       });
//     })
//     .catch((err) => console.log("error in catch in util ", err.message));
// };
import AsyncStorage from "@react-native-async-storage/async-storage";

exports.apiCall = async function (url, body, method, token = null) {
  console.log(url, "url");

  if (!token) {
    token = await AsyncStorage.getItem("accessToken");
  }
  console.log("Token", token);
  return fetch(url, {
    method: method,
    headers: !token //anonymous apis
      ? {
          Accept: "application/json",
          "Content-Type": "application/json",
        
        }
      : {
          // logged in user
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `${token}`,
          "client-secret": "1QiLA0KICJhbGciOiJIUzI1NiJ9",
        },
    body: body ? JSON.stringify(body) : null,
  }).catch(err => {
    console.log("Something went wrong, please check your network.");
  });
};