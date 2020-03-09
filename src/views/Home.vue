<template>
  <div
    class="bg-fixed h-screen w-screen bg-cover bg-center shadow-2xl"
    :style="`background-image:url(${bgImage})`"
  >
  
  </div>
</template>

<script>
import bgImage from "../assets/bg.jpg";

export default {
  name: "Home",
  data() {
    return {
      bgImage
    };
  }
};
</script>