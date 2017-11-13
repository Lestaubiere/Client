<template>
  <div class="not-found container">
    <img class="not-found__icon" src="../../assets/icons/404.svg" alt="404 icon">
    <p class="not-found__content">
      <span class="not-found__code">404</span>
      <span class="not-found__message">{{ $t('notFound.label') }}</span>
      <span class="not-found__go-back">
        <router-link :to="$t('menu.home.path')"
                 class="button">
          {{ $t('notFound.goBack') }}
        </router-link>
      </span>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'l-404',

    metaInfo() {
      return {
        title: this.title,
      };
    },

    computed: {
      title() {
        return this.$i18n.t('notFound.meta.title');
      },
    },
  };
</script>

<style scoped>
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 25px;
  }

  .not-found__icon {
    height: 200px;
    margin-bottom: 35px;
  }

  .not-found__content {
    text-align: center;
    color: rgba(0, 0, 0, .15);
  }

  .not-found__code {
    display: block;
    margin-bottom: 10px;
    font-size: 100px;
    font-weight: bold;
  }

  .not-found__message {
    display: block;
    margin-bottom: 50px;
    font-size: 18px;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    .not-found {
      padding: 0 10px;
    }
  }
</style>
