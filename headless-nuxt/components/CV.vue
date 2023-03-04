<template>
  <section class="section">

    <div>
      <h1>CV</h1>
    </div>
    
    <div v-if="assets" class="container assets-container">
      
      <img :src="assets.data[0].Img[0].url" :alt="assets.name" class="img"/>
      
    </div>
  </section>
</template>

<script setup>
const { find } = useStrapi();
const assets = ref();

onMounted(async () => {
  assets.value = await find("assets", { populate: "deep" });
});
</script>

<style scoped>

.img {
  width: auto;
  height: 100px;
  margin-top: 5px;
}

</style>