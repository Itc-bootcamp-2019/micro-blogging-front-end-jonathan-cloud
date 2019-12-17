
import axios from "axios";

const baseUrl = "https://itc-bootcamp-19-dot-charcha-dev.appspot.com/";

export function getTweet() {
  return axios.get(`${baseUrl}tweet`);
}
