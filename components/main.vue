<template>
  <main :class="$store.state.color" class="pt-24 pb-16 px-5 bg-body-bg bg-fixed bg-right-bottom lg:bg-center transition-colors duration-500 bg-blend-multiply">
    <slot />
  </main>
</template>

<script>
export default {
  name: 'Main'
}
</script>
