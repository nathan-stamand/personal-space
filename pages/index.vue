<template>
  <div>

    <Main>
      <div class="
        w-fit block mx-auto my-10 relative rounded-lg
        before:content-[''] before:w-full before:h-full before:border before:border-amber-100 before:border-4
        before:absolute before:top-0 before:left-0 before:z-20 before:bg-slate-900/20 before:rounded-lg
        before:animate-shift-dr

        after:content-[''] after:w-full after:h-full after:animate-shift-tl after:top-0 after:left-0
        after:absolute after:z-0 after:bg-white/20 after:rounded-lg
      ">
        <img src="https://i.pravatar.cc/300" alt="c'est moi" class="relative z-10 rounded-lg shadow-black/60 shadow-2xl" />
      </div>
      <h1 class="text-center text-3xl font-bold bg-black/50 w-fit px-4 py-2 mx-auto">&lt;nathan st.amand /&gt;</h1>
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
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="mb-7 text-3xl font-bold">Check out my experience</h2>
        <Nuxtbutton class="mx-auto" to="/resume">My Resume</Nuxtbutton>
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
