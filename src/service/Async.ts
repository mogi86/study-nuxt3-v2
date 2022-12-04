import {get} from "~/service/RappedAsyncData";
import {useCookie} from "#app";

export async function synchronizeToStorage () {
    // useCookie needs to be called first, if we want to use await in utility function
    const cookie = useCookie<any>('async')

    const { data } = await get('/api/hello')
    console.log(data.value)
    cookie.value = data.value
}
