<template>
  <div class="main">
    <div class="main-top">
      <FarmCard :queue="queue" />
    </div>
    <div class="main-bottom">
      <button class="main-btn">
        Препарат 1
      </button>
      <button class="main-btn">
        Препарат 2
      </button>
      <button class="main-btn">
        Препарат 3
      </button>
    </div>
  </div>
</template>

<script>
import FarmCard from "./FarmCard";

export default {
  name: "FarmMain",
  components: {
    FarmCard,
  },
  data: () => ({
    queue: [
      {
        id: 1,
        image: "1-Smart 2.png",
        name: "Марія",
        years: "19 років",
        text: "Бабуся приймає брендовий препарат від болю в суглобах, він допомагає, але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд.",
      },
      {
        id: 2,
        image: "8-Poor 2.png",
        name: "Степан",
        years: "61 рік",
        text: "Спросоння відсунув гарячий чайник рукою та обпікся. У Вас всі ліки від опіків такі дорогі? Можна хороший препарат недорого?",
      },
      {
        id: 3,
        image: "3-Smart 1.png",
        name: "Любов",
        years: "58 років",
        text: "Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною.",
      },
      {
        id: 4,
        image: "image (2).png",
        name: "Олександр",
        years: "20 років",
        text: "Порекомендуйте ефективний препарат від болю в горлі за розумну ціну.",
      },
      {
        id: 5,
        image: "5-Smart 1.png",
        name: "Ірина",
        years: "55 років",
        text: "У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний аналог за прийнятною ціною.",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}
.main-top {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  overflow: hidden;
}

.main-bottom {
  padding: 0 20px;
  height: 160px;
  display: flex;
  justify-content: center;

  .main-btn {
    max-width: 280px;
    width: 100%;
    height: 90px;
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    border-radius: 100px;
    margin-left: 40px;
    cursor: pointer;
    border: none;
    background-image: linear-gradient(266.19deg, #8049c7 0%, #ca57fd 100%);

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
