<template>
  <div>
    <Main>
      <div
        class="w-fit block mx-auto my-10 relative rounded-lg before:content-[''] before:w-full before:h-full before:border-4 before:border-amber-100 before:absolute before:top-0 before:left-0 before:z-20 before:bg-slate-900/20 before:rounded-lg before:animate-shift-dr after:content-[''] after:w-full after:h-full after:animate-shift-tl after:top-0 after:left-0 after:absolute after:z-0 after:bg-white/20 after:rounded-lg"
      >
        <img
          src="https://i.pravatar.cc/300"
          alt="A real, actual picture of me."
          width="300"
          height="300"
          class="relative z-10 rounded-lg shadow-black/60 shadow-2xl"
        />
      </div>
      <PageTitle>&lt;nathan st.amand /&gt;</PageTitle>
    </Main>

    <Section id="about">
      <Hopscotch>
        <h2 class="text-3xl font-bold">About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos
          expedita commodi dolorum possimus iure incidunt dolor ratione
          laudantium adipisci nemo, odit totam. Totam
          <strong>deserunt</strong> consectetur tenetur ut assumenda porro.
        </p>
        <Button link="https://github.com/nathan-stamand" target="_blank"
          >My Github</Button
        >
      </Hopscotch>
    </Section>

    <Section styles="bg-section-bg bg-blend-multiply bg-center bg-fixed">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="mb-7 text-3xl font-bold">Check out my experience</h2>
        <Nuxtbutton class="mx-auto" to="/resume">My Resume</Nuxtbutton>
      </div>
    </Section>

    <Section id="projects">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="max-w-3xl mx-auto mb-7 text-3xl font-bold">My Projects</h2>
        <p class="max-w-3xl mx-auto">
          Here are some projects I've made in my free time. Gaze upon them,
          judge my worth!
        </p>

        <div
          class="flex flex-row flex-wrap justify-center mt-10 gap-y-6 -mx-3 lg:mx-0"
        >
          <ProjectCard
            v-for="project in projects"
            :key="project.title"
            :title="project.title"
            :description="project.description"
            :link="project.link"
            :github="project.github"
            :image="project.image"
          />
        </div>
      </div>
    </Section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "This Very Portfolio Site!",
          description:
            "If it's a cop out to cite my portfolio as a project within itself, then this site's a police state! Badum tiss",
          link: "",
          github: "https://github.com",
          image: "https://picsum.photos/900/500",
        },
        {
          title: "Chat Noir",
          description:
            "Just a little chat I used to learn more about Socket.io, and to practice with Node, Express, and MongoDB",
          link: "https://www.google.com",
          github: "https://github.com",
          image: "https://picsum.photos/1700/600",
        },
        {
          title: "Quarto!",
          description:
            "Based on a board game I saw at a shop one time! Too cheap to buy Overcomplicated Tic-Tac-Toe, I built it with React instead.",
          link: "https://www.google.com",
          github: "https://github.com",
          image: "https://picsum.photos/300/200",
        },
      ],
    };
  },
  head: {
    title: "Home Page",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Nathan St.Amand's web development portfolio site.",
      },
    ],
  },
  name: "IndexPage",
};
</script>
