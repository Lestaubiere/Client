<template>
  <div class="card" :style="{ borderColor: color }">
    <h4 class="card__title">{{ title }}</h4>
    <img class="card__image" :src="`../../${imagePath}`" :alt="`Picture ${title}`">
    <p class="card__content" v-if="content">{{ content }}</p>
    <div class="card__button">
      <router-link v-if="link && linkLabel"
                  class="button"
                  :style="{ backgroundColor: color }"
                  :to="`/${link}`" >
        {{ linkLabel }}
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'l-card',

    props: {
      title: {
        type: String,
        required: true,
      },
      imagePath: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: false,
      },
      link: {
        type: String,
        required: false,
      },
      linkLabel: {
        type: String,
        required: false,
      },
      color: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 75px;
    border: 8px solid;
  }

  .card__title {
    max-width: calc(100% - 15px);
    margin-top: -25px;
    padding: 0 15px;
    background-color: #ffffff;
    font-size: 2.25rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }

  .card__image {
    width: calc(100% + 70px);
    max-width: calc(100% + 70px);
    margin: 25px -35px;
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  }

  .card__content {
    padding: 0 25px 25px;
    line-height: 1.5rem;
  }

  .card__button {
    padding: 0 10px;
    background-color: #ffffff;
    transform: translateY(35px);
  }

  @media (max-width: 960px) {
    .card {
      margin: 50px 50px;
    }

    .card__title {
      margin-top: -20px;
      font-size: 2rem;
    }
  }

  @media (max-width: 800px) {
    .card {
      margin: 50px 100px;
    }

    .card__title {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 600px) {
    .card {
      margin: 50px 50px;
    }

    .card__title {
      margin-top: -18px;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 420px) {
    .card {
      margin: 50px 20px;
    }
  }
</style>
