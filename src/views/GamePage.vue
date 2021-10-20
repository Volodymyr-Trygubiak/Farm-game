<template>
  <div class="game">
    <FarmAside />
    <FarmMain />
  </div>
</template>

<script>
import FarmAside from "@/components/FarmAside";
import FarmMain from "@/components/FarmMain";
export default {
  name: "GamePage",
  components: {
    FarmAside,
    FarmMain,
  },
};
</script>

<style lang="scss" scoped>
.game {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
