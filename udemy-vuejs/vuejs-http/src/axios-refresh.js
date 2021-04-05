import axios from 'axios';

// axiosのカスタムインスタンスを使いcomments以外にも使えるようにする
const instance = axios.create({
  baseURL: 'https://securetoken.googleapis.com/v1'
});

// instance.defaults.headers.commonとかできる

export default instance;
