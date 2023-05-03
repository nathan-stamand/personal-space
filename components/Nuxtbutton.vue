<template>
  <NuxtLink
    :to="to"
    :class="styles"
    class="block relative w-fit bg-black/50 focus:bg-black/90 hover:bg-black/90 transition-colors duration-500 px-6 py-3 lowercase before:content-[''] before:absolute before:block before:transition-transform before:left-0 before:top-0 before:border-amber-100 before:w-full before:border-l before:border-t before:duration-500 before:scale-0 before:h-full hover:before:scale-x-100 focus:before:scale-x-100 before:origin-top-left hover:before:scale-y-100 focus:before:scale-y-100 after:content-[''] after:absolute after:block after:transition-transform after:right-0 after:bottom-0 after:border-amber-100 after:w-full after:border-r after:border-b after:duration-500 after:scale-0 after:h-full hover:after:scale-x-100 focus:after:scale-x-100 after:origin-bottom-right hover:after:scale-y-100 focus:after:scale-y-100"
  >
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  name: "Nuxtbutton",
  props: {
    to: String,
    styles: String,
  },
};
</script>
