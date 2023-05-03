<template>
  <a :href="link" :target="target" :class="styles">
    <slot />
  </a>
</template>
<script>
export default {
  name: "Link",
  props: {
    target: String,
    link: String,
    styles: String,
  },
};
</script>
