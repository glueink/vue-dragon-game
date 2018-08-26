const state = {
  alerts: []
}

const mutations = {
  'SET_ALERT' (state, alerts) {
    state.alerts.push(alerts)
  },
  'DELETE_ALERT' (state) {
    state.alerts.shift()
  },
  'CLEAR_ALERTS' (state) {
    state.alerts = []
  }
}

const actions = {
  showAlert ({commit}, alert) {
    commit('SET_ALERT', alert)
    setTimeout(() => {
      commit('DELETE_ALERT')
    }, 3000)
  },
  clearAlerts ({commit}) {
    commit('CLEAR_ALERTS')
  },
  alertSuccess ({dispatch}, alert) {
    let alertObj = {}
    if (alert.success) {
      alertObj = {
        success: alert.success,
        message: 'Quest Succeed'
      }
    } else {
      alertObj = {
        success: alert.success,
        message: 'Quest Failure'
      }
    }
    dispatch('showAlert', alertObj)
  },
  alertShoppingSuccess ({dispatch}, alert) {
    let alertObj = {}
    if (alert.shoppingSuccess) {
      alertObj = {
        success: alert.shoppingSuccess,
        message: 'Purchase Succeed'
      }
    } else {
      alertObj = {
        success: alert.shoppingSuccess,
        message: 'Purchase Failure'
      }
    }
    dispatch('showAlert', alertObj)
  },
  alertGameEnd ({dispatch}, alert) {
    let alertObj = {}
    alertObj = {
      success: false,
      message: 'Game End, your score is: ' + alert.score
    }
    dispatch('showAlert', alertObj)
  },
  alertError ({dispatch}, alert) {
    let alertObj = {}
    alertObj = {
      success: false,
      message: alert.response.data
    }
    dispatch('showAlert', alertObj)
  }
}

const getters = {
  alerts: state => {
    return state.alerts
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
