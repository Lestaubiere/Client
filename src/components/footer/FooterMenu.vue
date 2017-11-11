<template>
  <div class="footer-menu">
    <h3 class="footer-menu__title">Menu</h3>
    <nav class="footer-menu__container">
      <router-link to="/campground"
                  class="footer-menu__item">
        {{ $t("menu.campground") }}
      </router-link>
      <router-link to="/leisure"
                  class="footer-menu__item">
        {{ $t("menu.leisure") }}
      </router-link>
      <router-link to="/facilities"
                  class="footer-menu__item">
        {{ $t("menu.facilities") }}
      </router-link>
      <router-link to="/rentals"
                  class="footer-menu__item">
        {{ $t("menu.rentals") }}
      </router-link>
      <router-link to="/surroundings"
                  class="footer-menu__item">
        {{ $t("menu.surroundings") }}
      </router-link>
      <router-link to="/prices"
                  class="footer-menu__item">
        {{ $t("menu.prices") }}
      </router-link>
      <router-link to="/booking"
                  class="footer-menu__item">
        {{ $t("menu.booking") }}
      </router-link>
      <router-link to="/contact"
                  class="footer-menu__item">
        {{ $t("menu.contact") }}
      </router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'l-footer-menu',
  };
</script>

<style scoped>
  .footer-menu__title {
    margin-bottom: 20px;
    font-size: 1.3em;
  }

  .footer-menu__container {
    display: flex;
    flex-direction: column;
    font-size: .9em;
  }

  .footer-menu__item {
    margin: 6px 0;
    color: #ffffff;
    text-decoration: none;
  }

  .footer-menu__item:hover {
    text-decoration: underline;
  }
</style>
