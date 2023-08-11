import axios from "axios";

export const sendRequest = async (requestConfig) => {
  try {
    const res = await axios({
      method: requestConfig.method,
      url:
        "https://react-project-cfd32-default-rtdb.europe-west1.firebasedatabase.app" +
        requestConfig.url,
      data: requestConfig.data ? JSON.stringify(requestConfig.data) : undefined,
      headers: requestConfig.headers
        ? requestConfig.headers
        : {
            "Content-Type": "application/json",
          },
    });

    if (!res.data) {
      return [];
    }
    return res.data;
  } catch (err) {
    return {
      error: err.message,
      status: "fail",
    };
  }
};

// export const placeOrder = async (requestConfig) => {
//   try {
//     const res = await axios({
//       method: requestConfig.method,
//       url: requestConfig.url,
//       data: requestConfig.data ? JSON.stringify(requestConfig.data) : undefined,
//       headers: requestConfig.headers
//         ? requestConfig.headers
//         : {
//             "Content-Type": "application/json",
//           },
//     });
//   } catch (err) {}
// };
