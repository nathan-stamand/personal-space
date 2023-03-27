<template>
  <section :class="styles" class="py-16 px-5 bg-cyan-900">
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
