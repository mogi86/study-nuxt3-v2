import {defineEventHandler, getQuery} from "h3"

export default defineEventHandler((event) => {
    const query = getQuery(event)
    return `Content: ${query.name}`
})
