import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5001";

const useAxios = (params, executeOnMount = true) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (params) => {
    setLoading(true);
    try {
      const res = await axios.request(params);
      setResponse(res);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const makeRequest = () => {
    // e.preventDefault();
    fetchData(params);
  };

  useEffect(() => {
    if (executeOnMount) fetchData(params);
  }, []);

  return { response, error, loading, makeRequest };
};

export default useAxios;

// Documentation on what options available on setting up  the request config
// https://axios-http.com/docs/req_config
// decide if you want all 3 or just one of them such as response

//   const { response, error, loading } = useAxios({
//     method: "GET",
//     url: "/admin/allusers",
// headers: {

// },
// data: {
//   // data is basically the body, but in axios syntax. Example below
//   fullname: "ROBBIE",
// }
//   });
