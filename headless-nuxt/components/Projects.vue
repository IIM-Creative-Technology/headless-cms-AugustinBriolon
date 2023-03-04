<template>
  <section v-if="projets" class="section">
    <div class="project-container">
      <nuxt-link
        v-for="projet in projets.data.slice(0, 4)"
        :key="projet.id"
        :to="`/project/${projet.slug}`"
        class="project"
      >
        <img :src="projet.images.url" :alt="projet.name" class="img" />
        <h3>
          {{ projet.name }}
        </h3>
      </nuxt-link>
    </div>
  </section>

  <section v-else class="section">
    <div class="project-container skeleton-container">
      <div class="project skeleton-card" v-for="i in 4" :key="i">
        <div class="skeleton skeleton-img"></div>
        <div class="skeleton skeleton-title"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { find } = useStrapi();
const projets = ref();

onMounted(async () => {
  projets.value = await find("projets", { populate: "deep" });
});
</script>

<style lang="scss" scoped>
.project-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .project {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: 1px solid #333;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.01);
    }

    h3 {
      margin: 10px 0;
    }

    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
  }
}
</style>
