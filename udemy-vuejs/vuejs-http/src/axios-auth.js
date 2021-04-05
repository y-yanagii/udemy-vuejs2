import axios from 'axios';

// axiosのカスタムインスタンスを使いcomments以外にも使えるようにする
const instance = axios.create({
  baseURL: 'https://firestore.googleapis.com/v1/projects/vuejs-http-170f0/databases/(default)/documents'
});

// instance.defaults.headers.commonとかできる

export default instance;
