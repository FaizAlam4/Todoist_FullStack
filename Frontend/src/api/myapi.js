import axios from "axios";

// import cookieParser from "cookie-parser";
// app.use(cookieParser());

const token = `a524292b76798804fb14e617a9629962f508c18c`;
const headers = {
  Authorization: `Bearer ${token}`,
};

const requests = {
  get: async (url) => {
    try {
      const data = await axios.get(url, { withCredentials: true });
      return data.data;
    } catch (err) {
      console.log(err);
    }
  },

  post: async (url, requestData, headerData) => {
    try {
      const data = await axios.post(url, requestData, {
        headers: { ...headerData },
      });
      return data.data;
    } catch (err) {
      console.log(err);
    }
  },

  put: async (url) => {
    try {
      const data = await axios.put(url);
      return data.data;
    } catch (err) {
      console.log(err);
    }
  },

  delete: async (url) => {
    try {
      const data = await axios.delete(url, { headers: headers });
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default requests;
