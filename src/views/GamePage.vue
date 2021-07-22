<template>
  <div class="game">
    <FarmAside />
  </div>
</template>

<script>
import FarmAside from "@/components/FarmAside";
export default {
  name: "GamePage",
  components: {
    FarmAside,
  },
};
</script>

<style lang="scss" scoped>
.game {
  display: flex;
}
</style>
