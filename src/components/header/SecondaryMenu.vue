<template>
  <div class="secondary-menu">
    <l-secondary-menu-item :label="$t('menu.campground')"
                           :name="'campground'"
                           :color="'#78BF45'"></l-secondary-menu-item>
    <l-secondary-menu-item :label="$t('menu.rentals')"
                           :name="'rentals'"
                           :color="'#D9237F'"></l-secondary-menu-item>
    <l-secondary-menu-item :label="$t('menu.prices')"
                           :name="'prices'"
                           :color="'#5AB5BF'"></l-secondary-menu-item>
    <l-secondary-menu-item :label="$t('menu.booking')"
                           :name="'booking'"
                           :color="'#4E35B4'"></l-secondary-menu-item>
  </div>
</template>

<script>
  import LSecondaryMenuItem from '@/components/header/SecondaryMenuItem';

  export default {
    name: 'l-secondary-menu',
    components: { LSecondaryMenuItem },
  };
</script>

<style scoped>
  .secondary-menu {
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
  }
</style>
