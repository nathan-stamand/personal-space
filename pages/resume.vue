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

    <Section class="bg-resume-tech bg-blend-multiply">
      <H2 class="text-center py-3 px-4 bg-black/50 w-fit mx-auto">
        Tech, in no particular&nbsp;order...
      </H2>
      <ul
        class="rounded-xl bg-black/80 mx-auto mt-8 max-w-md overflow-hidden shadow-black/70 shadow-xl lg:max-w-3xl w-full grid grid-cols-2 lg:grid-cols-3 [&>li:first-child]:border-t-0 [&>li:nth-child(2)]:border-t-0 max-lg:[&>li:nth-last-child(2):nth-child(even)]:border-b-2 max-lg:[&>li:nth-child(2n)]:text-right max-lg:[&>li:nth-child(2n-1)]:border-r-2 lg:[&>li:nth-child(3n)]:text-right lg:[&>li:nth-child(3n-1)]:text-center lg:[&>li:nth-child(3n-1)]:border-r-2 lg:[&>li:nth-child(3n-2)]:border-r-2 lg:[&>li:nth-child(3)]:border-t-0 lg:[&>li:nth-child(3n):nth-last-child(3)]:border-b-2 lg:[&>li:nth-child(3n):nth-last-child(2)]:border-b-2 lg:[&>li:nth-child(3n-1):nth-last-child(3)]:border-b-2">
        <li class="py-3 px-5 border-t-2 border-black/30" :class="$store.state.color" v-for="t in tech">
          {{ t }}
        </li>
      </ul>
    </Section>

    <Section>
      <hgroup class="text-center flex flex-col gap-y-4">
        <H2 class="py-3 px-4 bg-black/50 w-fit mx-auto"> Work Experience </H2>
        <h3 class="font-semibold text-2xl">
          Frontend Developer \ High Level Marketing
        </h3>
        <h4 class="font-medium text-xl italic">
          2020 - <strong class="uppercase">Present</strong>
        </h4>
      </hgroup>
      <hr class="w-8 h-2 bg-black/50 border-none mx-auto my-6 -skew-x-[45deg]" />
      <ul class="max-w-7xl mx-auto md:columns-2 xl:columns-3 [&>li]:break-inside-avoid-column [&>li]:mb-8 [&>li]:px-3">
        <li>
          <strong>Developing sites</strong> for clients’ particular needs using
          the
          <strong>proprietary Footprint Content Management System (CMS)</strong>, often building custom modules from
          scratch using a combination of
          <strong>PHP, MySQL, Sass, and JavaScript / jQuery</strong>.
        </li>
        <li>
          Building “Blueprints” atop the Footprint CMS to provide
          <strong>responsive</strong>
          versions of complex, modern designs, featuring JavaScript-assisted
          <strong>CSS animations</strong>, flexible modules for worry-free
          content updates, using <strong>SVG shapes</strong> to give stunning
          effects, all while delivering great performance.
        </li>
        <li>
          <strong>Reading, troubleshooting, and debugging a large codebase</strong>
          and <strong>training new developers</strong> on how to do the same.
        </li>
        <li>
          <strong>Integrating 3rd party applications through API calls</strong>,
          such as <strong>Authorize.net</strong> for credit card processing or
          Constant Contact to set up email campaigns for leads.
        </li>
        <li>
          Create and maintain custom backend features for clients that require
          non-standard additions to Footprint CMS to fit their unique
          requirements, and integrate them safely with new or existing
          <strong>SQL</strong>
          tables and modifying or creating classes to interact with the data.
        </li>
        <li>
          Updating older sites to increase
          <strong>Core Web Vitals</strong> scores for
          <strong>Largest Contentful Paint, Cumulative Layout Shift, and First Input
            Delay</strong>
          -- implementing best practices to score as high as possible on tools
          like GTMetrix.
        </li>
      </ul>
    </Section>

    <Section>
      <hgroup class="text-center flex flex-col gap-y-4">
        <H2 class="py-3 px-4 bg-black/50 w-fit mx-auto">Education</H2>
        <h3 class="font-semibold text-2xl">
          FlatIron Full-Stack Web Development Bootcamp
        </h3>
      </hgroup>

      <hr class="w-8 h-2 bg-black/50 border-none mx-auto my-6 -skew-x-[45deg]" />
      <ul class="max-w-7xl mx-auto md:columns-2 xl:columns-3 [&>li]:break-inside-avoid-column [&>li]:mb-8 [&>li]:px-3">
        <li>
          <strong>Learned</strong> the fundamentals of
          <strong>Object Oriented Programming</strong> and
          <strong>Model-View-Controller</strong> design patterns.
        </li>
        <li>
          <strong>Created</strong> a full-stack web application using
          <strong>Ruby on Rails</strong> and <strong>Sqlite</strong> to build a
          database-backed web app with full CRUD functionality.
        </li>
        <li>
          <strong>Developed</strong> a <strong>React</strong> app with a
          <strong>Ruby on Rails</strong> backend to build a dynamic web app with
          full CRUD functionality.
        </li>
      </ul>
      <hgroup class="text-center flex flex-col gap-y-4">
        <h3 class="font-semibold text-2xl">
          Bachelor's of Science \ University of Louisiana at Lafayette
        </h3>
      </hgroup>
    </Section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tech: [
        "Linux",
        "Unix Command Line",
        "Bash",
        "Vi / Vim",
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
        "Adobe Photoshop",
        "Adobe XD",
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
