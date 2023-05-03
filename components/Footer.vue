<template>
  <footer class="bg-black/70">
    <nav class="text-center">
      <ul class="inline-flex justify-center gap-x-5 p-3">
        <li v-for="item in menuitems">
          <Link
            :href="item.href"
            target="_blank"
            class="hover:text-amber-100/80 focus:text-amber-100/80 transition-colors"
            >{{ item.text }}
          </Link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      menuitems: [
        {
          text: "LinkedIn",
          href: "https://www.linkedin.com/in/nathan-st-amand/",
        },
        { text: "GitHub", href: "https://github.com/nathan-stamand/" },
      ],
    };
  },
  name: "Footer",
};
</script>
