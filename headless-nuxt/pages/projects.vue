<template>
  <div class="section">
    <div v-if="projets" class="container">
      <div class="button-container">
        <button class="filter-button" @click="filterProjects('all')">
          All
        </button>
        <button
          v-for="techno in technos"
          :key="techno"
          @click="filterProjects(techno)"
          class="filter-button"
        >
          {{ techno }}
        </button>
      </div>

      <div class="projects-container">
        <div class="projects-img-container" :style="backgroundStyle"></div>
        <div class="btn-projects-container">
          <div class="hover-this">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g transform="rotate(90 12 12)">
                <path
                  fill="#333"
                  d="m20 16l-5.5 5.5l-1.42-1.41L16.17 17H10.5A6.5 6.5 0 0 1 4 10.5V4h2v6.5C6 13 8 15 10.5 15h5.67l-3.08-3.09l1.41-1.41L20 16Z"
                />
              </g>
            </svg>
            <h3>Hover this !</h3>
          </div>
          <nuxt-link
            v-for="projet in filteredProjects"
            :key="projet.id"
            :to="`/project/${projet.slug}`"
            class="btn-projects"
            @mouseover="changeBackground(projet.images.url)"
            @mouseout="resetBackground"
          >
            {{ projet.name }}
          </nuxt-link>
        </div>
      </div>
    </div>

    <div v-else class="container">
      <div class="button-container">
        <div v-for="i in 4" :key="i" class="skeleton skeleton-btn"></div>
      </div>
      <div class="projects-container">
        <div class="skeleton projects-img-container"></div>
        <div class="btn-projects-container">
          <div v-for="i in 4" :key="i" class="skeleton skeleton-text"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { find } = useStrapi();

const projets = ref();
const technos = ref([]);
const activeFilter = ref("all");
const hoveredImage = ref(null);

const filterProjects = (techno) => {
  activeFilter.value = techno;
};

const filteredProjects = computed(() => {
  if (activeFilter.value === "all") return projets.value.data;
  return projets.value.data.filter(
    (projet) => projet.technologies[0].Name === activeFilter.value
  );
});

const changeBackground = (image) => {
  hoveredImage.value = image;
};

const resetBackground = () => {
  hoveredImage.value = null;
};

const backgroundStyle = computed(() => {
  return {
    backgroundImage: `url(${hoveredImage.value})`,
  };
});

onMounted(async () => {
  projets.value = await find("projets", { populate: "deep" });
  technos.value = new Set(
    projets.value.data.map((projet) => {
      return projet.technologies[0].Name;
    })
  );
});
</script>

<style lang="scss" scoped>
.projects-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60vh;
  width: 100%;

  @media screen and (max-width: 767px) {
    justify-content: center;
  }
}

.projects-img-container {
  background-image: url("");
  background-size: cover;
  background-position: center;
  height: 400px;
  width: 100%;
  max-width: 750px;
  border: 1px solid #333;

  @media screen and (max-width: 767px) {
    display: none;
  }
}
.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.filter-button {
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(319deg,#ff794f,#ffd90f);
  }
}

.hover-this {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;

  p {
    font-weight: 700;
  }

  h3 {
    padding-bottom: 10px;
    text-decoration: underline;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
}

// .skeleton-button

.btn-projects-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  @media screen and (max-width: 767px) {
    align-items: center;
  }

  .btn-projects {
    padding: 10px;
    font-size: 32px;
    font-weight: 700;
    text-align: left;
    white-space: nowrap;

    // line animation on hover

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
        background-image: linear-gradient(319deg,#ff794f,#ffd90f);
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
    width: 200px;
    height: 45px;
    border-radius: 5px;
    margin: 5px;
  }
}

.button-container {
  display: flex;
  .skeleton-btn {
    margin: 10px;
  }
}
</style>
