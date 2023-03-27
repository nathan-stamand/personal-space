<template>
  <header class="bg-slate-800 overflow-auto">
    <button class="lg:hidden block w-16 h-16 bg-black/40 float-right" aria-haspopup="true" type="button" aria-controls="main-menu">
      
    </button>
    <nav class="max-w-7xl mx-auto lg:block hidden" id="main-menu" role="menu">
      <ul class="flex flex-row justify-around items-center">
        <li class="px-4 py-4" role="none"><a href='#about' role="menuitem">about</a></li>
        <li class="px-4 py-4" role="none"><a href='#projects' role="menuitem">projects</a></li>
        <li class="px-4 py-4" role="none"><a href='/resume' role="menuitem">resume</a></li>
        <li class="px-4 py-4" role="none"><a href='#links' role="menuitem">links</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
