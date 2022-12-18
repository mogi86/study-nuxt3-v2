<template>
  <h1>Link</h1>
  <div>
    <NuxtLink to="/use_fetch">
      useFetch
    </NuxtLink>
  </div>
  <div>
    <NuxtLink to="/use_lazy_fetch">
      useLazyFetch
    </NuxtLink>
  </div>
  <div>
    <NuxtLink to="/fetch_lazy_fetch_call_post_api">
      useLazyFetch calling post pai
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "link"
}
</script>

<style scoped>

</style>
