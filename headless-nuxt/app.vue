<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import "~/assets/scss/main.scss";

body {
  max-width: 1920px !important;
  margin: 0 auto;
}

.section {
  padding: 80px clamp(20px, 5vw, 130px);
}

.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 10px;
}

.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

.skeleton-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around !important;
  width: 100%;

  .skeleton-card {
    width: 100%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .skeleton-img {
      width: 100%;
      height: 300px;
      border-radius: 5px;
    }

    .skeleton-title {
      width: 100%;
      max-width: 200px;
      height: 30px;
      border-radius: 5px;
      margin: 10px 0;
    }

    .skeleton-text {
      width: 100%;
      max-width: 200px;
      height: 19px;
      border-radius: 5px;
    }
  }
}
.skeleton-btn {
  width: 70px;
  height: 35px;
  border-radius: 5px;
  margin: 10px 0;
}
</style>
