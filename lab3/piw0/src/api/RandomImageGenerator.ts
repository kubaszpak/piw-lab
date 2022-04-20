import axios from "axios";

const getRandomImage = async (): Promise<string> => {
  return axios.get("https://picsum.photos/70/100").then((res) => {
    return res.request.responseURL;
  });
};

export default getRandomImage;
