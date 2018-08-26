import axios from 'axios'

const state = {
  messages: []
}

const mutations = {
  'SET_MESSAGES' ( state, messages ) {
    state.messages = messages
  }
}

const actions = {  
  initMessages: async ({ commit }, game) => {
    try {
      await axios.get('https://www.dragonsofmugloar.com/api/v2/'+ game.gameId +'/messages')
      .then(response => response.data)
      .then(messages => 
        commit('SET_MESSAGES', messages)
      );
    } catch (error) {
      dispatch('alertError', error)
    }
  },
  solveMessage: async ({ dispatch }, { game, message }) => {
    try {
      await axios.post('https://www.dragonsofmugloar.com/api/v2/'+ game.gameId +'/solve/' + message.adId)
      .then(response => response.data)
      .then(options => {
        dispatch('initShop', game)
        dispatch('initMessages', game)
        dispatch('fetchNewGameValues', options)
      });
    } catch (error) {
      dispatch('alertError', error)
    }
  }
}

const getters = {
  messages: state => {
    return state.messages
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}