<template>

  <div :class="styles" class="
    w-fit block mx-auto my-10 relative
    before:content-[''] before:w-full before:h-full before:border-amber-100 before:border-4 before:rounded-[inherit]
    before:absolute before:top-0 before:left-0 before:z-20 before:bg-slate-900/20
    before:animate-shift-dr

    after:content-[''] after:w-full after:h-full after:animate-shift-tl after:top-0 after:left-0
    after:absolute after:z-0 after:bg-white/20 after:rounded-[inherit]
  ">
    <img src="https://i.pravatar.cc/300" alt="Ya Boi" width="300" height="300" class="relative z-1 rounded-[inherit] shadow-black/60 shadow-2xl" />
  </div>

</template>

<script>
export default {
  name: 'ShiftyPic',
  props: {
    styles: {
      type: String,
      default: 'rounded-lg'
    }
  }
}
</script>
