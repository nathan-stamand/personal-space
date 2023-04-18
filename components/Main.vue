<template>
  <main :id="id" :class="[$store.state.color, styles]" class="pt-24 pb-16 px-5 bg-home-bg bg-fixed bg-right-bottom lg:bg-center transition-colors duration-500 bg-blend-multiply">
    <slot />
  </main>
</template>

<script>
export default {
  name: 'Main',
  props: {
    id: {
      type: String,
      default: 'main'
    },
    styles: {
      type: String,
      default: 'bg-home-bg',
    },
  }
}
</script>
