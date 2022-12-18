import {defineEventHandler} from "h3"

export default defineEventHandler(async (event) => {
    console.log('5 seconds waiting start')
    await new Promise(s => setTimeout(s, 5000))
    console.log('5 seconds waiting end')
    return `5 seconds post api finished!`
})
