const travelersStore = {
    namespaced: true,
    state: {
        // userName: '도로시'
        list:[]
    },
    getters: {
        // GE_USER_NAME: state => state.userName
        GET_TRAVELERS: stateu => state.list
    },
    mutations: {
        // MU_USER_NAME: (state, payload) => {
        //     /*
        //         여기서는 payload를 객체로 받습니다.
        //         payload를 객체로 받으면, mutation를 조금더 유연하게 사용할 수 있기는 합니다.
        //     */
        //     state.userName = payload.userName
        // }
        PUSH_TRAVELERS:(state, payload)=>{
            state.list = payload.list
        }
    },
    actions: {
        // AC_USER_NAME: ({ commit }, payload) => {
        //     commit('MU_USER_NAME', payload)
        // }
        SET_TRAVELERS: ({ commit }, payload) => {
            commit('PUSH_TRAVELERS', payload)
        }
    }
}

export default travelersStore