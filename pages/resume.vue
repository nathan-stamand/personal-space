<template>

  <div>
    <Main styles="bg-resume-bg">
      <ShiftyPic styles="rounded-full" />
      <PageTitle>&lt;my resume /&gt;</PageTitle>
    </Main>

    <Section>
      <H2 class="text-center">Education</H2>
    </Section>
  </div>

</template>


<script>
export default {
  head: {
    title: 'Resume',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: "Nathan St.Amand's HTML Resume"
      }
    ]
  },
  name: 'ResumePage'
}
</script>
