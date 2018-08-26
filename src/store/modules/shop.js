import axios from 'axios'

const state = {
  shop: []
}

const mutations = {
  'SET_SHOP' ( state, shop ) {
    state.shop = shop
  }
}

const actions = {  
  initShop: async ({ commit }, game) => {
    try {
      axios.get('https://www.dragonsofmugloar.com/api/v2/'+ game.gameId +'/shop')
      .then(response => response.data)
      .then(shop => 
        commit('SET_SHOP', shop)
      );
    } catch (error) {
      console.error(error);
    }
  },
  buyShopItem: async ({ dispatch }, { game, item }) => {
    try {
      await axios.post('https://www.dragonsofmugloar.com/api/v2/'+ game.gameId +'/shop/buy/' + item.id)
      .then(response => response.data)
      .then(options => {
        dispatch('initShop', game)
        dispatch('initMessages', game)
        dispatch('fetchNewGameValues', options)
      });
    } catch (error) {
      console.error(error);
    }
  }
}

const getters = {
  shop: state => {
    return state.shop
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}