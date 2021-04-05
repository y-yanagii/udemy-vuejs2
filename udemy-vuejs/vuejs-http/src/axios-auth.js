import axios from 'axios';

// axiosのカスタムインスタンスを使いcomments以外にも使えるようにする
const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1'
});

// instance.defaults.headers.commonとかできる

export default instance;
