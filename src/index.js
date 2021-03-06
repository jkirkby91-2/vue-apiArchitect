import Vue from 'vue'
import Vuex from 'vuex'
import config from '../config/'
import routes from './routes'
import ping from './vuex/modules/apiArchitect/ping/store'
import auth from './vuex/modules/apiArchitect/auth/store'
import user from './vuex/modules/apiArchitect/user/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ping,
    user,
    auth
  },
  strict: true
})

let apiArchitect = {}

apiArchitect.install = function (Vue, options) {
    Vue.prototype.$apiArchitect = store,
    Vue.prototype.$apiArchitect.$config = config
    Vue.prototype.$apiArchitect.$routes = routes

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(apiArchitect)
  }
}

export default apiArchitect
