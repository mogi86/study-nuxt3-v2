import {defineEventHandler} from "h3"

export default defineEventHandler((event) => {
    console.log('get api is called')
    return `Hello, World!`
})
