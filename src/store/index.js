import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)                                                                                                                                                         

import { InstrumentStore } from './instrument'

export default new Vuex.Store({
  modules: {
    instrumentList: InstrumentStore,
  },                                                                                                                                                                  
  strict: true   
})
  