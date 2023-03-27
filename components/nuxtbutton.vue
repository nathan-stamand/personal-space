<template>
  <NuxtLink :to="to" class="block w-fit bg-black/30 hover:bg-black/60 transition-colors px-6 py-3 lowercase">
    <slot />
  </NuxtLink>
</template>

<script>
  export default {
    name: "Nuxtbutton",
    props: {
      to: String,
    }
  }
</script>
