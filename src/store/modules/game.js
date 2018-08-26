import axios from 'axios'

const state = {
  game: []
}

const mutations = {
  'SET_GAME' ( state, game ) {
    state.game = game
  },
  'NEW_GAME_OPTIONS' ( state, game ) {
    delete state.game.success
    delete state.game.shoppingSuccess
    state.game = { ...state.game, ...game }
  }
}

const actions = {  
  initGame: async ({ commit, dispatch, getters }) => {
    await axios.post('https://www.dragonsofmugloar.com/api/v2/game/start')
    .then((response) => {
      var data = response.data;
      commit('SET_GAME', data);
      dispatch('initMessages', getters.game)
      dispatch('initShop', getters.game)
    }, (error) => {
      console.log(error);
    });
  },
  acceptQuest: async ({ dispatch, getters }, message) => {
    let game = getters.game
    let obj = {
      game,
      message
    }
    dispatch('solveMessage', obj)
  },
  purchaseItem: async ({ dispatch, getters }, item) => {
    let game = getters.game
    let obj = {
      game,
      item
    }
    dispatch('buyShopItem', obj)
  },
  fetchNewGameValues: async ({ commit, dispatch }, values) => {
    commit('NEW_GAME_OPTIONS', values)
    if (values.hasOwnProperty('success')) {
      // dispatch('notifySuccess', values)
      console.log(values.success)
    }
    if (values.hasOwnProperty('shoppingSuccess')) {
      // dispatch('notifyShoppingSuccess', values)
      console.log(values.shoppingSuccess)
    }
    if(values.lives == 0) {
      alert('You Lost, youre score is ' + values.score);
      dispatch('initGame');
    }
  }
}

const getters = {
  game: state => {
    return state.game
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}