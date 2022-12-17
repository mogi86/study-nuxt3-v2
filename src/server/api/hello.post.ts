import {defineEventHandler} from "h3"

export default defineEventHandler((event) => {
    console.log('post api is called')
    return `Hello, Post!`
})
