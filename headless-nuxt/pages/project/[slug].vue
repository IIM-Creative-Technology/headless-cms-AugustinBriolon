<template>
  <section class="section">
    <nuxt-link to="/projects">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-arrow-left"
      >
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
    </nuxt-link>

    <div v-if="projet">
      <div class="project-container">
        <div class="img-project-container">
          <a href="projet.url" target="_blank">
            <img
              :src="projet.images.url"
              :alt="projet.name + 'Image'"
              class="img"
            />
          </a>
        </div>
        <div class="info-project-container">
          <div class="text-project-container">
            <nuxt-link target="_blank" :href="projet.url">
              {{ projet.name }}
            </nuxt-link>
          </div>
          <div class="techno-project-container">
            <div
              v-for="technologie in projet.technologies"
              :key="technologie.id"
            >
              <img
                :src="technologie.Logo[0].url"
                :alt="technologie.name"
                class="img"
              />
            </div>
          </div>
        </div>
        <div class="description-project-container">
          <p>{{ projet.description }}</p>
        </div>
      </div>
    </div>

    <div v-else class="project-container">
      <div class="img-project-container">
        <div class="skeleton skeleton-image"></div>
      </div>
      <div class="info-project-container">
        <div class="text-project-container">
          <div class="skeleton skeleton-text"></div>
        </div>
        <div class="techno-project-container">
          <div class="skeleton skeleton-image"></div>
        </div>
      </div>
      <div class="description-project-container">
        <div class="skeleton skeleton-description"></div>
      </div>
    </div>

    <div v-if="projets" class="button-container">
      <nuxt-link ref="prev" class="button" :to="`/project/${prevProjets.slug}`">Previous project</nuxt-link>
      <nuxt-link ref="next" class="button" :to="`/project/${nextProjets.slug}`">Next project</nuxt-link>
    </div>

    <div v-else class="button-container">
      <div class="skeleton skeleton-btn"></div>
      <div class="skeleton skeleton-btn"></div>
    </div>
  </section>
</template>

<script setup>
const { findOne, find } = useStrapi();
const route = useRoute();
const projet = ref();
const projets = ref();
const nextProjets = ref();
const prevProjets = ref();

onMounted(async () => {
  projet.value = await findOne(
    `projets?filters[slug]=${route.params.slug}&populate=deep`
  );
  projet.value = projet.value.data[0];

  projets.value = await find(`projets?populate=deep`);
  projets.value = projets.value.data;
  nextProjets.value = projets.value.find(
    (project) => project.slug > projet.value.slug
  );
  prevProjets.value = projets.value.find(
    (project) => project.slug < projet.value.slug
  );
  if (nextProjets.value === undefined) {
    nextProjets.value = projets.value[0];
  }
  if (prevProjets.value === undefined) {
    prevProjets.value = projets.value[projets.value.length - 1];
    console.log(projets.value.length - 1)
  }
});
</script>

<style lang="scss" scoped>
.project-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: 1px solid #333;
  border-radius: 5px;
  margin-top: 15px;

  .img-project-container {
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-bottom: 1px solid #333;

    a {
      width: 100%;
      height: 100%;
    }

    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      border-radius: 5px;
    }

    .skeleton-image {
      height: 499px;
      width: 100%;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
  }
  .info-project-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    width: 100%;

    .text-project-container {
      width: 50%;
      height: 50%;
      text-align: left;
      padding: 20px;

      a {
        font-weight: 500;
        &:hover {
          position: relative;
          overflow: hidden;
          &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 2px;
            background-image: linear-gradient(319deg, #ff794f, #ffd90f);
            animation: line 0.5s ease-in-out;
          }
          @keyframes line {
            0% {
              width: 0%;
            }
            100% {
              width: 100%;
            }
          }
        }
      }

      .skeleton-text {
        height: 20px;
        width: 200px;
      }
    }
  }

  .techno-project-container {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 20px;

    .img {
      width: 100%;
      max-width: 50px;
      height: auto;
      object-fit: cover;
    }

    .skeleton-image {
      height: 50px;
      width: 50px;
      border-radius: 5px;
    }
  }

  .description-project-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    padding: 20px;
    border-top: 1px solid #333;

    p {
      width: 100%;
    }

    .skeleton-description {
      height: 20px;
      width: 70%;
    }
  }
}

.button-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}
</style>
