import {useCookie} from "#app";

async function setPrivate () {
    useCookie('hoge', {
        secure: true
    }).value = 'private'
}

export async function set () {
    useCookie('hoge', {
        secure: true
    }).value = '123'

    await setPrivate()

    useCookie('hoge', {
        secure: true
    }).value = '777'
}
