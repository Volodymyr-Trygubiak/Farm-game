<template>
  <aside class="aside-wrap">
    <nav class="aside-top">
      <ul class="aside-list">
        <router-link
          class="aside-link"
          :to="{ name: 'startPage' }"
        >
          <img
            src="../assets/icons/Home.png"
            alt=""
          >
        </router-link>

        <router-link
          class="aside-link"
          :to="{ name: 'gamePage' }"
          @click.native="$router.go()"
        >
          <img
            src="../assets/icons/Home.png"
            alt=""
          >
        </router-link>
      </ul>
    </nav>
    <div class="aside-main">
      <h3 class="aside-info">
        Параметри:
      </h3>
      <div class="aside-groupe">
        <div class="aside-item">
          <img
            src="../assets/icons/Sadly_icon.png"
            alt=""
          >
          <span class="count">{{ medicine.sad }}</span>
        </div>
        <div class="aside-item">
          <img
            src="../assets/icons/Happy_icon.png"
            alt=""
          >
          <span class="count">{{ medicine.happy }}</span>
        </div>
        <div class="aside-item">
          <img
            src="../assets/icons/heart_icon.png"
            alt=""
          >
          <span class="count">{{ medicine.heart }}</span>
        </div>
      </div>
    </div>
    <div class="aside-bottom">
      <p>Осталось в очереди:</p>
      <p>
        <strong>{{ medicine.count }}</strong>/15
      </p>
    </div>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FarmAside",

  computed: {
    ...mapGetters({
      medicine: "medicine",
    }),
  },

  created() {
    this.getLocalMedicine();
  },

  methods: {
    ...mapActions(["getLocalMedicine"]),
  },
};
</script>

<style lang="scss" scoped>
.aside-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 470px;
  height: 100vh;
  position: relative;
  color: #fff;

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);
    opacity: 0.7;
    z-index: -1;
  }
}
.aside-top {
  margin-top: 70px;
}
ul {
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 0 10px;
}

.aside-link {
  width: 70px;
  height: 70px;
  margin-left: 40px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.aside-main {
  display: flex;
  flex-direction: column;
  margin: 0 35px;
}

.aside-info {
  font-size: 36px;
  align-self: start;
}

.aside-groupe {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
}

.aside-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 190px;
  height: 80px;
  background-color: #fff;
  border-radius: 45px;
  margin-bottom: 40px;
  padding: 10px;

  &:first-child {
    margin-right: 20px;
  }

  .count {
    font-size: 48px;
    width: 100px;
    color: #424242;
    font-weight: 700;
  }
}

.aside-bottom {
  position: relative;
  height: 134px;

  &:after {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    opacity: 0.15;
    z-index: 1;
  }

  p {
    margin-top: 10px;
    font-size: 38px;
    font-weight: 300;
  }
}
</style>
