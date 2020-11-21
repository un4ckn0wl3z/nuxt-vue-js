export const state = () => ({
  drawer: false,
})

export const mutations = {
  set_drawer(state, val) {
    state.drawer = val
  },
}
