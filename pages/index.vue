import Main from '../components/main.vue'
import Section from '../components/section.vue'
import Hopscotch from "../components/hopscotch.vue"
import Button from "../components/button.vue"
import Nuxtbutton from "../components/nuxtbutton.vue"
<template>
  <div>

    <Main>
      <div class="
        w-fit block mx-auto my-10 relative rounded-lg
        before:content-[''] before:w-full before:h-full before:border before:border-amber-100 before:border-4
        before:absolute before:top-4 before:left-4 before:z-20 before:bg-slate-900/20 before:rounded-lg

        after:content-[''] after:w-full after:h-full 
        after:absolute after:bottom-4 after:right-4 after:z-0 after:bg-white/10 after:rounded-lg
      ">
        <img src="https://i.pravatar.cc/300" alt="c'est moi" class="relative z-10 rounded-lg shadow-black/60 shadow-2xl" />
      </div>
      <h1 class="text-center text-3xl font-bold">&lt;nathan st.amand /&gt;</h1>
    </Main>

    <Section>
      <Hopscotch>
        <h2 class="text-3xl font-bold">About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos expedita commodi dolorum possimus iure incidunt dolor ratione laudantium adipisci nemo, odit totam. Totam deserunt consectetur tenetur ut assumenda porro.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos expedita commodi dolorum possimus iure incidunt dolor ratione laudantium adipisci nemo, odit totam. Totam deserunt consectetur tenetur ut assumenda porro. </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos expedita commodi dolorum possimus iure incidunt dolor ratione laudantium adipisci nemo, odit totam. Totam <strong>deserunt</strong> consectetur tenetur ut assumenda porro.
        </p>
        <Button link="#####" target="_blank">Button!</Button>
      </Hopscotch>
    </Section>

    <Section styles="bg-section-bg bg-blend-multiply bg-center bg-fixed">
      <div class="max-w-7xl mx-auto">
        <h2>BRUH</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, omnis deserunt? Vel ipsa assumenda dolores consequatur quisquam ad quod error, odio cupiditate non veniam sequi facere ullam, voluptatibus saepe repudiandae!</p>
        <Nuxtbutton to="/resume">Check the Rez</Nuxtbutton>
      </div>
    </Section>

  </div>
</template>

<script>
export default {
  head: {
    title: 'Home Page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: "Nathan St.Amand's web development portfolio site."
      }
    ]
  },
  name: 'IndexPage'
}
</script>
