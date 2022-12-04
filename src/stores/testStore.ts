import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', {
    state: () => ({
        test: ''
    }),
    getters: {},
    actions: {
        update (val: string) {
            this.test = val
        }
    }
})
