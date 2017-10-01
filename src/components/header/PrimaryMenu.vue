<template>
  <nav class="primary-menu">
    <router-link to="/" class="primary-menu__item">{{ $t("menu.primary.home") }}</router-link>
    <router-link to="/campground" class="primary-menu__item">{{ $t("menu.primary.campground") }}</router-link>
    <router-link to="/rentals" class="primary-menu__item">{{ $t("menu.primary.rentals") }}</router-link>
    <router-link to="/surroundings" class="primary-menu__item">{{ $t("menu.primary.surroundings") }}</router-link>
    <router-link to="/photos" class="primary-menu__item">{{ $t("menu.primary.photos") }}</router-link>
    <router-link to="/directions" class="primary-menu__item">{{ $t("menu.primary.directions") }}</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'l-primary-menu',
  };
</script>

<style scoped>
  .primary-menu__item {
    position: relative;
    margin: 0 5px;
    padding: 5px;
    color: #ffffff;
    text-decoration: none;
  }

  .primary-menu__item:last-of-type {
    margin-right: 0;
  }

  .primary-menu__item:first-of-type {
    margin-left: 0;
  }

  .primary-menu__item::after {
    position: absolute;
    content: '';
    width: 0;
    height: 1px;
    left: 50%;
    bottom: 0;
    margin-top: 5px;
    background-color: #ffffff;
    transition: width .3s ease, left .3s ease;
  }

  .primary-menu__item.router-link-exact-active::after {
    width: 100%;
    left: 0;
  }
</style>
