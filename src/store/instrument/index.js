import InstrumentService from '../../services/instrument.service'

export const InstrumentStore = {
  namespaced: true,
  state: {
    keyword: "",
    loading: false,
    instruments: []
  },

  mutations: {
    setInstruments ( state, instruments ) {                                                                                                           
      state.instruments = instruments                                                                                                                              
    },
    setKeyword ( state, keyword ) {                                                                                                           
      state.keyword = keyword                                                                                                                              
    },
    setLoading (state, val) {
      state.loading = val
    }
  },

  actions: {
    async setKeyword(store, keyword) {
      store.commit('setKeyword', keyword)
      store.dispatch('loadInstruments') 
    },
    async loadInstruments(store) {
      store.commit('setLoading', true)
      const instruments = await InstrumentService.GetInstruments(store.state.keyword)
      store.commit('setInstruments', instruments)
      store.commit('setLoading', false)
    },
    async deleteInstrument(store, id) {
      store.commit('setLoading', true)
      await InstrumentService.DeleteInstrument(id)
      store.dispatch('loadInstruments')
    },
    async createInstrument(store, newInstrument) {
      store.commit('setLoading', true)
      const instrument = await InstrumentService.CreateInstruments(newInstrument)
      await store.dispatch('loadInstruments')
      return instrument
    }
  },

  getters: {
    getInstruments (state) {                                                                                                                           
      return state.instruments                                                                                                                                            
    },
    getKeyword (state) {
      return state.keyword
    },
    isLoading (state) {
      return state.loading
    }
  }
}

  