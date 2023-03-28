export const state = () => ({
  color: 'bg-cyan-900'
})

export const getters = {
  getColor(state) {
    return state.color
  }
}

export const mutations = {
  CHANGE_COLOR(state) {
    const colorWheel = {
      "bg-cyan-900": "bg-sky-700",
      "bg-sky-700": "bg-fuchsia-900",
      "bg-fuchsia-900": "bg-teal-600",
      "bg-teal-600": "bg-gray-600",
      "bg-gray-600": "bg-cyan-900",
    };
    state.color = colorWheel[state.color];
  }
}

