import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const moduleA = {
    namespaced: true,
    state: { 
        count: 3
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    getters: {
      doubleCount (state) {
          return state.count * 2
      }  
    },
    actions: {
        incrementIfOdd({state, commit}) {
            if (state.count % 2 === 1) {
                commit('increment');
            }
        }
    }
}

const moduleB = {
    namespaced: true,
    modules: {
        subModule: {
            namespaced: true,
            state: {
                
            },
            mutations: {
                login () {}
            },
            getters: {
              login () {}  
            },
            actions: {
              login () {}  
            }
        }
    },
    state: {
        count: 8
    },
    mutations: {
        
    },
    getters: {
        someGetter (state, getters) {
            
        }
    },
    actions: {
        someAction({ dispatch, commit, getters }) {
            
        }
    }
}

const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    },
    state: {
        count: 2
    },
    mutations: {
        
    },
    getters: {
        
    },
    actions: {
        
    }
})


new Vue({ 
    el: '#app',
    store,
    data: {
    },
    computed: {
    }
});

// console.log(store.state.a.count);
// // console.log(store.state.b.count);
// store.commit('a/increment');
// console.log(store.state.a.count);

store.commit('b/subModule/login');
store.dispatch('b/subModule/login');
store.getters['b/subModule/login'];
