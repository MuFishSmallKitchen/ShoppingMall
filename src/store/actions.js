const actions = {
    asyncAddName({ commit }, data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('syncAddData', data)
                console.log(data)
                resolve(1)
            }, 1000)
        })
    }
}

export default actions