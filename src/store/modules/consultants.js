import Axios from "axios";

const state = {
    consultants: []
}

const getters = {
    allConsultants: state => state.consultants
}

const mutations = {
    setConsultants: (state, consultants) => state.consultants = consultants,
    newConsultants: (state, consultant) => state.consultants.unshift(consultant),
    removeConsultant: (state, id) =>
        (state.consultants = state.consultants.filter(consultant => consultant.id !== id)),
    updateConsultant: (state, updConsultant) => {
        const index = state.consultants.findIndex(consultant => consultant.id === updConsultant.id);
    
        if (index !== -1) {
            state.consultants.splice(index, 1, updConsultant);
        }
    }
}

const actions = {
    async fetchConsultants({
        commit
    }) {
        const response = await Axios.get("https://my-json-server.typicode.com/yangjiakai/zeshi3/consultants")
        commit('setConsultants', response.data)
    },


    async addConsultant({
        commit
    }, editedItem) {
        const response = await Axios.post(
            'https://my-json-server.typicode.com/yangjiakai/zeshi3/consultants',
            editedItem

        );
        commit('newConsultants', response.data);
    },
    async deleteConsultant({
        commit
    }, id) {
        await Axios.delete(`https://my-json-server.typicode.com/yangjiakai/zeshi3/consultants/${id}`);
        commit('removeConsultant', id);
    },

    async updateConsultant({
        commit
    }, editedItem) {
        const response = await Axios.put(
            `https://my-json-server.typicode.com/yangjiakai/zeshi3/consultants/${editedItem.id}`,
            editedItem
        );
        commit('updateConsultant', response.data);

    }
}

export default {
    state,
    getters,
    mutations,
    actions
}