<template>
  <VueTinder
    ref="tinder"
    key-name="id"
    :style="style"
    :queue.sync="queue"
    :offset-y="0"
  >
    <div
      slot-scope="scope"
      class="farm-card"
    >
      <img
        class="farm-image"
        :src="require(`../assets/images/${scope.data.image}`)"
        alt="image"
      >
      <div class="farm-text">
        <p class="farm-person">
          {{ scope.data.name }}, {{ scope.data.years }}
        </p>
        <p class="farm-info">
          {{ scope.data.text }}
        </p>
      </div>
      <button @click="decide('nope')">
        HVLk
      </button>
      <button @click="decide('super')">
        sadfsdf
      </button>
      <button @click="decide('like')">
        sdfsdf
      </button>
    </div>
  </VueTinder>
</template>

<script>
import VueTinder from "vue-tinder";

export default {
  name: "FarmCard",

  components: {
    VueTinder,
  },
  props: {
    queue: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    offset: 0,
    style: { "border-radius": "50%" },
  }),
  computed: {},
  methods: {
    decide(choice) {
      console.log(1);
      this.$refs.tinder.decide(choice);
    },
  },
};
</script>

<style lang="scss" scoped>
.farm-card {
  width: 100%;
  height: 100%;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
  overflow: hidden;
  cursor: pointer;
  user-select: none;
}
.farm-image {
  display: block;
  width: 100%;
  height: 350px;
  pointer-events: none;
}

.farm-text {
  text-align: left;
  margin: 15px 50px 40px;
}

.farm-person {
  font-size: 32px;
  font-weight: 700;
  color: #8e9ad5;
}
.farm-info {
  font-weight: 300;
}
//  Tinder ===================================

.vue-tinder {
  width: 540px;
  height: 590px;
  border-radius: 40%;
}
button {
  cursor: pointer;
}
</style>
