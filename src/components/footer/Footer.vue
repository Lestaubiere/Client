<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__left-footer">Copyright © 2017</div>
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
    background-color: #262525;
    color: #ffffff;
  }

  .footer__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px;
  }
</style>
