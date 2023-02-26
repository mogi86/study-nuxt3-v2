export function setupState () {
    const state2 = ref(0)
    state2.value = 200

    function increment () {
        state2.value++
        console.log('state2:', state2.value)
    }

    return {
        increment: increment,
        state2: state2
    }
}
