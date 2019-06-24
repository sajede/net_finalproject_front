const state = {
  sessionId: ''
};

const getters = {
  sessionId : state => {
    return state.LogedMode;
  }
};

const mutations = {
  sessionId : (state, id) => {
    state.sessionId = id;
  }
};

export default {
  state,
  getters,
  mutations
}
