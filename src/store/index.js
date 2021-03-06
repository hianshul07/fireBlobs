import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      { blogTitle: "Blog card #1", blogCoverPhoto:"stock-1", blogDate: "May 69, 2069"},
      { blogTitle: "Blog card #1", blogCoverPhoto:"stock-2", blogDate: "May 69, 2069"},
      { blogTitle: "Blog card #1", blogCoverPhoto:"stock-3", blogDate: "May 69, 2069"},
      { blogTitle: "Blog card #1", blogCoverPhoto:"stock-4", blogDate: "May 69, 2069"},
    ],
    editPost: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
      console.log(state.editPost);
    }
  },
  actions: {
  },
  modules: {
  }
})
