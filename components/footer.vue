<template>
  <footer class="bg-black/70">
    <nav>
      <ul>
        <li v-for="item in menuitems">
          <a target="_blank" :href='item.href'>{{ item.text }}</a>
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
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/nathan-st-amand/' },
        { text: 'GitHub', href: 'https://github.com/nathan-stamand/' },
      ],
    }
  },
  name: 'Footer'
}
</script>
