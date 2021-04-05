import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios-auth';
import router from '../router';
import axiosRefresh from '../axios-refresh';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null
  },
  getters: {
    idToken: state => state.idToken
  },
  mutations: {
    updateIdToken(state, idToken) {
      state.idToken = idToken;
    }
  },
  actions: {
    // idTokenがブラウザのローカルストレージにあったらそれを返しなければNullを返す
    async autoLogin({ commit, dispatch }) {
      const idToken = localStorage.getItem('idToken');
      if (!idToken) return;
      const now = new Date();
      const expiryTimeMs = localStorage.getItem('expiryTimeMs');
      const isExpired = now.getTime() >= expiryTimeMs;
      const refreshToken = localStorage.getItem('refreshToken');
      if (isExpired) {
        await dispatch('refreshIdToken', refreshToken);
      } else {
        const expiresInMs = expiryTimeMs - now.getTime();
        setTimeout(() => {
          dispatch('refreshIdToken', refreshToken);
        }, expiresInMs);
        commit('updateIdToken', idToken);
      }
    },
    login(context, authData) {
      axios.post(
        '/accounts:signInWithPassword?key=AIzaSyBzSj1vrbwJdJ9zAMdzzLk92_w5zO0dRUs',
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      ).then(response => {
        this.dispatch('setAuthData', {
          idToken: response.data.idToken,
          expiresIn: response.data.expiresIn,
          refreshToken: response.data.refreshToken
        });
        router.push('/');
      }).catch(error => {
        console.log(error);
      });
    },
    logout({ commit }) {
      // トークンをNullにして削除
      commit('updateIdToken', null);
      localStorage.removeItem('idToken');
      localStorage.removeItem('expiryTimeMs');
      localStorage.removeItem('refreshToken');
      router.replace('/login');
    },
    // トークンを更新する
    async refreshIdToken({ dispatch }, refreshToken) {
      await axiosRefresh
        .post('/token?key=AIzaSyBzSj1vrbwJdJ9zAMdzzLk92_w5zO0dRUs', {
          grant_type: 'refresh_token',
          refresh_token: refreshToken
        })
        .then(response => {
          dispatch('setAuthData', {
            idToken: response.data.id_token,
            expiresIn: response.data.expires_in,
            refreshToken: response.data.refresh_token
          });
        });
    },
    register(context, authData) {
      axios.post(
        '/accounts:signUp?key=AIzaSyBzSj1vrbwJdJ9zAMdzzLk92_w5zO0dRUs',
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      ).then(response => {
        this.dispatch('setAuthData', {
          idToken: response.data.idToken,
          expiresIn: response.data.expiresIn,
          refreshToken: response.data.refreshToken
        });
        router.push('/');
      }).catch(error => {
        console.log(error);
      });
    },
    setAuthData({ commit, dispatch }, authData) {
      const now = new Date();
      const expiryTimeMs = now.getTime() + authData.expiresIn * 1000;

      // this.commitで上のmutationsのupdateIdTokenを呼んでいる
      commit('updateIdToken', authData.idToken);

      // ブラウザのlocalStorageにアクセストークンと経過時間を保持
      localStorage.setItem('idToken', authData.idToken);
      localStorage.setItem('expiryTimeMs', expiryTimeMs);
      localStorage.setItem('refreshToken', authData.refreshToken);

      // 1時間ごとトークンを更新する
      setTimeout(() => {
        dispatch('refreshIdToken', authData.refreshToken);
        // authData.expiresInには3600が入っている
      }, authData.expiresIn * 1000);
    }
  }
});
