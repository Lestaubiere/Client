<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__left-column">Copyright © 2017</div>
      <div class="footer__right-column">Last updated at: {{updatedAt}}</div>
    </div>
  </footer>
</template>

<script>
  import deployment from '@/config/deployment.json';

  export default {
    name: 'l-footer',
    data() {
      return {
        updatedAt: deployment.updated_at,
      };
    },
  };
</script>

<style scoped>
  .footer {
    margin-top: 75px;
    background-color: #262525;
    color: #ffffff;
  }

  .footer__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px;
  }

  @media (max-width: 800px) {
    .footer {
      margin-top: 50px;
    }
  }

  @media (max-width: 600px) {
    .footer__container {
      flex-direction: column
    }

    .footer__left-column {
      margin-bottom: 15px;
    }
  }
</style>
