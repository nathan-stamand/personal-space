<template>
  <div>
    <Main styles="bg-resume-bg">
      <ShiftyPic styles="rounded-full" />
      <PageTitle>&lt;my resume /&gt;</PageTitle>
    </Main>

    <Section class="">
      <div class="flex flex-col gap-y-6 mx-auto max-w-4xl text-center">
        <H2 class="text-center">About Me</H2>
        <p>
          Ah jeez, here we go. Here comes a descriptive paragraph that tells you
          just enough personal details about me so I seem human, but enough
          professionalism to convey my capability. A sort of elevator pitch for
          my work persona, if you will. Probably going to have a few jokes;
          probably going to have a few serious sentences. But one thing's for
          sure:
        </p>
        <p>
          <strong>It's gonna end on a bold, single sentence.</strong>
        </p>
      </div>
    </Section>

    <Section>
      <H2 class="text-center">Tech, in no particular&nbsp;order</H2>
      <ul
        class="mx-auto mt-6 max-w-md lg:max-w-3xl w-full gap-1 grid grid-cols-2 lg:grid-cols-3 max-lg:[&>li:nth-child(2n)]:text-right lg:[&>li:nth-child(3n)]:text-right lg:[&>li:nth-child(3n-1)]:text-center"
      >
        <li class="mb-2" v-for="t in tech">{{ t }}</li>
      </ul>
    </Section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tech: [
        "PHP",
        "Laravel",
        "Artisan",
        "Composer",
        "Blade",
        "Node",
        "Express",
        "Docker",
        "MySQL",
        "MongoDB",
        "Socket.io",
        "JavaScript ES6",
        "TypeScript",
        "React",
        "Vue",
        "Nuxt",
        "jQuery",
        "Sass",
        "Foundation",
        "HTML5",
        "CSS3",
      ],
    };
  },
  head: {
    title: "Resume",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Nathan St.Amand's HTML Resume",
      },
    ],
  },
  name: "ResumePage",
};
</script>
