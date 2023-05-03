<template>
  <header
    class="bg-black/80 overflow-visible fixed w-full h-auto left-0 top-0 z-50"
    id="page_header"
  >
    <button
      class="lg:hidden block w-12 h-12 bg-black/40 float-right relative"
      aria-haspopup="true"
      type="button"
      aria-controls="main-menu"
      @click="showMenu = true"
    >
      <span
        class="before:block before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-5/12 before:h-0.5 before:bg-white before:rounded-md"
      ></span>
      <span
        class="before:block before:absolute before:top-1/3 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-5/12 before:h-0.5 before:bg-white before:rounded-md"
      ></span>
      <span
        class="before:block before:absolute before:top-2/3 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-5/12 before:h-0.5 before:bg-white before:rounded-md"
      ></span>
    </button>

    <!-- Mobile Menu -->
    <nav
      v-show="showMenu"
      class="max-w-xs text-right w-full bg-black h-screen mx-auto block lg:hidden absolute top-0 right-0"
      id="main-menu"
      role="menu"
    >
      <button @click="showMenu = false" class="text-2xl py-4 px-8 inline-block">
        &times;
      </button>
      <ul class="flex flex-col w-full h-full">
        <li v-for="item in menuitems" class="px-4 py-2" role="none">
          <a
            @mouseover="changeColor"
            class="p-2 px-5 rounded-lg inline-block transition-colors duration-250 bg-transparent hover:bg-white/20"
            :href="item.href"
            role="menuitem"
            @click="showMenu = false"
            >{{ item.text }}</a
          >
        </li>
      </ul>
    </nav>

    <!-- Large Menu -->
    <nav class="max-w-7xl mx-auto hidden lg:block" id="main-menu" role="menu">
      <ul class="flex flex-row justify-around items-center">
        <li v-for="item in menuitems" class="p-2" role="none">
          <a
            @mouseover="changeColor"
            class="py-2 px-5 rounded-lg inline-block transition-colors duration-250 bg-transparent hover:bg-white/20"
            :href="item.href"
            role="menuitem"
            >{{ item.text }}</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuitems: [
        { text: "home", href: "/" },
        { text: "about", href: "/#about" },
        { text: "projects", href: "/#projects" },
        { text: "resume", href: "/resume" },
      ],
      showMenu: false,
    };
  },
  methods: {
    changeColor() {
      this.$store.commit("CHANGE_COLOR");
    },
  },
  name: "Header",
};
</script>
