import Axios from "axios";

const state = {
    jobs: []
}

const getters = {
    allJobs: state => state.jobs
}

const mutations = {
    setJobs: (state, jobs) => state.jobs = jobs,
    newJobs: (state, job) => state.jobs.unshift(job),
    removeJob: (state, id) =>
        (state.jobs = state.jobs.filter(job => job.id !== id)),
    updateJob: (state, updJob) => {
        const index = state.jobs.findIndex(job => job.id === updJob.id);
        // console.log(index);
        if (index !== -1) {
            state.jobs.splice(index, 1, updJob);
        }
    }
}

const actions = {
    async fetchJobs({
        commit
    }) {
        const response = await Axios.get("https://my-json-server.typicode.com/yangjiakai/zeshi/jobs")
        commit('setJobs', response.data)
    },


    async addJob({
        commit
    }, editedItem) {
        const response = await Axios.post(
            'https://my-json-server.typicode.com/yangjiakai/zeshi/jobs',
            editedItem

        );
        commit('newJobs', response.data);
    },
    async deleteJob({
        commit
    }, id) {
        await Axios.delete(`https://my-json-server.typicode.com/yangjiakai/zeshi/jobs/${id}`);
        commit('removeJob', id);
    },

    async updateJob({
        commit
    }, editedItem) {
        const response = await Axios.put(
            `https://my-json-server.typicode.com/yangjiakai/zeshi/jobs/${editedItem.id}`,
            editedItem
        );
        commit('updateJob', response.data);

    }
}

export default {
    state,
    getters,
    mutations,
    actions
}