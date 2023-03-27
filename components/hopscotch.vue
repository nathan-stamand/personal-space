<template>
  <div class="max-w-7xl w-full gap-8 flex flex-col lg:items-center lg:flex-row mx-auto">
    <div class="basis-6/12">
      <img src="https://api.lorem.space/image?w=600&h=600" alt="PLACEHOLDER" class="rounded-lg shadow-black/60 shadow-2xl m-auto lg:m-0">
    </div>

    <div class="basis-6/12 flex flex-col gap-5">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hopscotch'
}
</script>
