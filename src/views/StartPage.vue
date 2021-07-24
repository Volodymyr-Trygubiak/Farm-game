<template>
  <div class="main">
    <div class="main-bg">
      <div class="main-text-wrap">
        <h4 class="main-text">Добро пожаловать в игру</h4>
        <h1 class="main-title">
          Помоги <br />
          <p>ФАРМАЦЕВТУ</p>
        </h1>
      </div>
      <router-link class="start-btn" :to="{ name: 'gamePage' }">
        Начать
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "GamePage",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
.main {
  background-image: url(../assets/shutterstock_111500834.jpg);
  background-size: cover;
  height: 100vh;
  position: relative;
  color: #fff;
  min-height: 900px;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);
    opacity: 0.35;
  }

  .main-bg {
    position: absolute;
    top: -30px;
    left: 110px;
    background-image: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);
    width: 860px;
    height: 860px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 10;
  }

  .main-text-wrap {
    width: 520px;
    margin-top: 280px;
    letter-spacing: 1px;
    text-align: left;
  }

  .main-text {
    font-size: 34px;
    font-weight: 300;
    margin-bottom: 30px;
  }
  .main-title {
    font-size: 60px;
    margin-bottom: 120px;
    p {
      font-size: 70px;
    }
  }
  .start-btn {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90px;
    width: 380px;
    font-size: 36px;
    font-weight: 0;
    color: #8e9ad5;
    background-color: #fff;
    border-radius: 100px;
    text-decoration: none;
  }
}
</style>
