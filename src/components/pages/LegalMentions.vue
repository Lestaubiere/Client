<template>
  <div class="legal-mentions container">
    <h2 class="legal-mentions__title">CONCEPTEUR – RÉALISATEUR</h2>
    <div class="legal-mentions__container">
      <p class="paragraph legal-mentions__info">SARL LESTAUBIÈRE</p>
      <p class="paragraph legal-mentions__info">Pont Saint-Mamet</p>
      <p class="paragraph legal-mentions__info">24140, Douville</p>
      <p class="paragraph legal-mentions__info">France</p>
    </div>
    <div class="legal-mentions__container">
      <p class="paragraph legal-mentions__info"><a href="tel:+33553829815">+33 5 53 82 98 15</a></p>
      <p class="paragraph legal-mentions__info"><a href="mailto:lestaubiere@gmail.com">lestaubiere@gmail.com</a></p>
    </div>
    <div class="legal-mentions__container">
      <p class="paragraph legal-mentions__info"><span>SIRET</span> 791 976 624 00019</p>
      <p class="paragraph legal-mentions__info"><span>Numéro TVA</span> FR 50791976624</p>
    </div>
    <h2 class="legal-mentions__title">HÉBERGEUR</h2>
    <div class="legal-mentions__container">
      <p class="paragraph legal-mentions__info">OVH</p>
      <p class="paragraph legal-mentions__info">2 rue Kellermann</p>
      <p class="paragraph legal-mentions__info">59100, Roubaix</p>
      <p class="paragraph legal-mentions__info">France</p>
    </div>
    <div class="legal-mentions__container">
      <p class="paragraph legal-mentions__info">SAS au capital de €10.000.000</p>
      <p class="paragraph legal-mentions__info">RCS ROUBAIX – TOURCOING 424 761 419 00045</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'l-legal-mentions',

    metaInfo() {
      return {
        title: 'Mentions légales',
      };
    },
  };
</script>

<style scoped>
  .legal-mentions {
    padding: 0 25px;
  }

  .legal-mentions__title:not(:first-of-type) {
    margin-top: 50px;
  }

  .legal-mentions__container {
    margin: 20px 0;
  }

  .legal-mentions__info {
    margin-bottom: 5px;
    line-height: 20px;
  }

  .legal-mentions__info span {
    font-weight: bold;
    margin-right: 10px;
  }

  .legal-mentions__info a {
    color: #d9237f;
    text-decoration: none;
  }

  .legal-mentions__info a:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    .legal-mentions {
      padding: 0 10px;
    }
  }
</style>
