<template>
  <a :href="link" :target="target" class="block w-fit bg-black/30 hover:bg-black/60 transition-colors px-6 py-3 lowercase">
    <slot />
  </a>
</template>

<script>
  export default {
    name: "Button",
    props: {
      target: String,
      link: String,
    }
  }
</script>
