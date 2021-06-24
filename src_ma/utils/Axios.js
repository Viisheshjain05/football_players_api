  //! IMPORT EXIOS FROM HERE

// Getting Basic Axios Configuration
import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://api.jsonbin.io/b/5d0c6e6a860ae0341876aac6/2",
});

export default axios;
