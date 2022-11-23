import {useAsyncData, useCookie} from "#app";

export async function get (path: string) {
    return useAsyncData(() => $fetch(path, {
        headers: {
            Authorization: useCookie('token').value || ''
        }
    }));
}
