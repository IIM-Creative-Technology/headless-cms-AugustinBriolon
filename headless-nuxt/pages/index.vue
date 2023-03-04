<template>
  <section ref="title" class="title section">
    <h1>Augustin Briolon</h1>
    <h2>Web Developer</h2>

    <div class="container contact-button">
      <nuxt-link class="button button-pulse" :to="`/projects`">
        My projects
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19"
            stroke="#333"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 5L19 12L12 19"
            stroke="#333"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </nuxt-link>
    </div>
  </section>

  <Projects />
</template>

<script>
import { gsap } from 'gsap';

export default {
  mounted() {
    console.log(this.$refs.title)
    gsap.from(this.$refs.title, {
      opacity: 0,
      y: 50,
      duration: 1,
    });
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100%;

  .contact-button {
    margin-top: 50px;
  }
}
</style>
