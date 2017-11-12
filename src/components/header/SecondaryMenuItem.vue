<template>
  <router-link :to="path" class="secondary-menu-item" :style="{backgroundColor: color}">
    <span :class="`secondary-menu-item__icon secondary-menu-item__icon--${name}`"></span>
    <span class="secondary-menu-item__label">{{ label }}</span>
  </router-link>
</template>

<script>
  export default {
    name: 'l-secondary-menu-item',

    props: {
      label: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      path: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .secondary-menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-basis: calc(25% - 30px);
    flex-shrink: 0;
    padding: 50px 15px;
    z-index: 1;
    text-decoration: none;
    border-radius: 3px;
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  }

  .secondary-menu-item__label {
    color: #ffffff;
    text-transform: uppercase;
  }

  .secondary-menu-item__icon {
    width: 85px;
    height: 85px;
    margin-bottom: 25px;
    transition: transform .3s ease;
  }

  .secondary-menu-item__icon.secondary-menu-item__icon--campground {
    background-image: url('../../assets/icons/campground.svg');
  }

  .secondary-menu-item__icon.secondary-menu-item__icon--rentals {
    background-image: url('../../assets/icons/rentals.svg');
  }

  .secondary-menu-item__icon.secondary-menu-item__icon--prices {
    background-image: url('../../assets/icons/prices.svg');
  }

  .secondary-menu-item__icon.secondary-menu-item__icon--booking {
    background-image: url('../../assets/icons/booking.svg');
  }

  .secondary-menu-item:hover .secondary-menu-item__icon {
    transform: scale(1.05);
  }

  @media (max-width: 960px) {
    .secondary-menu-item {
      flex-basis: calc(25% - 15px);
    }

    .secondary-menu-item__icon {
      width: 60px;
      height: 60px;
      background-size: 60px;
    }

    .secondary-menu-item__label {
      font-size: 0.8rem;
    }
  }
</style>
