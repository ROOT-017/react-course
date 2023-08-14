import axios from "axios";

const sendRequest = async (requesteConfiq) => {
  try {
    const res = await axios({
      url: requesteConfiq.url,
      method: requesteConfiq.method,
      data: JSON.stringify(requesteConfiq.data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (err) {
    return { err: err, message: err.message };
  }
};

export default sendRequest;
