
<template>
  <h1 class="text-center text-3xl font-bold bg-black/50 w-fit px-4 py-2 mx-auto"><slot /></h1>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    styles: {
      type: String,
      default: 'rounded-lg'
    }
  }
}
</script>
