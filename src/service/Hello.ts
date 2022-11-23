import { get } from './RappedAsyncData'

export async function getHello () {
    //--------------
    // case1: only one await
    //   => no error
    //--------------
    //
    // no error
    // const { data: data1 } = await get('/api/hello')
    // console.log('response1=', data1.value)

    //--------------
    // case2: multiple await, but no together
    //   => nuxt instance unavailable error
    //--------------
    //
    // const { data: data1 } = await get('/api/hello')
    // console.log('response1=', data1.value)
    // const { data: data2 } = await get('/api/hello')
    // console.log('response2=', data2.value)
    // => why error: https://nuxt.com/docs/getting-started/data-fetching#using-async-setup

    //--------------
    // case3: multiple await at together (use custom useAsyncData)
    //   => no error
    //--------------
    const [{data: data1}, {data: data2}] = await Promise.all([
        get('/api/hello'),
        get('/api/hello')
    ])
    console.log('response1=', data1.value)
    console.log('response2=', data2.value)

    //--------------
    // case4: multiple await at together
    //   => no error
    //--------------
    // const [{data: data1}, {data: data2}] = await Promise.all([
    //     useAsyncData(() => $fetch('/api/hello', {
    //         headers: {
    //             Authorization: useCookie('token').value || ''
    //         }
    //     })),
    //     useAsyncData(() => $fetch('/api/hello', {
    //         headers: {
    //             Authorization: useCookie('token').value || ''
    //         }
    //     }))
    // ])
    // console.log('response1=', data1.value)
    // console.log('response2=', data2.value)
}

export async function getHello2 () {
    const [{data: data1}, {data: data2}] = await Promise.all([
        get('/api/hello'),
        get('/api/hello')
    ])
    console.log('response1=', data1.value)
    console.log('response2=', data2.value)
}
