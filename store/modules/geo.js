const state = () => ({
  position: {}
})

const actions = {
  setPosition: ({
    commit
  }, position) => {
    commit('setPosition', position)
  },
}

const mutations = {
  setPosition(state, val) {
    let data=Object.assign({},state.position,val)
    state.position=data
  },
 
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
 
}
