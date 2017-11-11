<template>
  <div class="footer-contact">
    <h3 class="footer-contact__title">Contact</h3>
    <div class="footer-contact__container">
      <p class="footer-contact__info">Camping Lestaubière</p>
      <p class="footer-contact__info">Pont Saint-Mamet</p>
      <p class="footer-contact__info">24140, Douville</p>
      <p class="footer-contact__info">France</p>
    </div>
    <div class="footer-contact__container">
      <p class="footer-contact__info"><a href="tel:+33553829815">+33 5 53 82 98 15</a></p>
      <p class="footer-contact__info"><a href="tel:+33682282397">+33 6 82 28 23 97</a></p>
      <p class="footer-contact__info"><a href="mailto:lestaubiere@gmail.com">lestaubiere@gmail.com</a></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'l-footer-contact',
  };
</script>

<style scoped>
  .footer-contact__title {
    margin-bottom: 20px;
    font-size: 1.3em;
  }

  .footer-contact__container {
    margin-bottom: 20px;
  }

  .footer-contact__info {
    margin: 6px 0;
    font-size: .9em;
  }

  .footer-contact__info a {
    color: #ffffff;
    text-decoration: none;
  }

  .footer-contact__info a:hover {
    text-decoration: underline;
  }
</style>
