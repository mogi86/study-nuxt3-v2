import {useCookie} from "#app";

async function set () {
    useCookie('hoge', {
        secure: true
    }).value = '123'
}

export {
    set
}
