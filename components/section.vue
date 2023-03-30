<template>
  <section :class="[styles, $store.state.color]" class="py-16 px-5 duration-500">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    styles: String,
  }
}
</script>
