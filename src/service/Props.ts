import {Ref} from "vue"

export function setupProps () {
    const count2: Ref<Number> = ref(0)
    count2.value = 200

    return {
        count2: count2
    }
}
