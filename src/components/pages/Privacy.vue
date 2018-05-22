<template>
  <div class="privacy container">
    <h2 class="privacy__title">PROTECTION DE DONNÉES PERSONELLES</h2>
    <div class="privacy__container">
      <p class="paragraph privacy__info">Les données personnelles (nom, adresse, numéro de téléphone et adresse email) que les hôtes donnent au propriétaire de Camping Lestaubière, ne sont partagées avec personne (sauf obligations légales). Elles ne sont qu'utilisées pour la réservation, le contact avec les hôtes et pour la facture.</p>
    </div>
    <div class="privacy__container">
      <p class="paragraph privacy__info">A la réservation les hôtes donnent leur accord à l'enregistrement de leurs données personnelles dans l'administration de Camping Lestaubière.</p>
    </div>
    <div class="privacy__container">
      <p class="paragraph privacy__info">Après le séjour les hôtes ont en tout temps le droit de demander au propriétaire de Camping Lestaubière d'enlever définitivement leurs données personnelles de l'administration de Camping Lestaubière.</p>
    </div>
    <h2 class="privacy__title">UTILISATIONS DES COOKIES</h2>
    <div class="privacy__container">
      <p class="paragraph privacy__info">Nous utilisons les cookies pour améliorer l'expérience de ce site. Si vous acceptez l'utilisation des cookies, nous placerons les cookies suivants :</p>
    </div>
    <div class="privacy__container">
      <p class="privacy__subtitle">1. Google Analytics</p>
      <p class="paragraph privacy__info">Nous utilisont Google Analytics pour la mesure d'audiance pour nous aider à identifier le contenu qui vous intéresse.</p>
    </div>
    <div class="privacy__container">
      <p class="privacy__subtitle">1. Google Maps</p>
      <p class="paragraph privacy__info">Nous utilisont Google Maps pour vous indiquer l'itinéraire le plus rapide vers notre camping.</p>
    </div>
    <div class="privacy__container">
      <p class="privacy__subtitle">1. Facebook</p>
      <p class="paragraph privacy__info">Nous utilisont Facebook pour vous afficher directement le dernièr contenu publié sur notre page.</p>
    </div>
    <div class="privacy__container">
      <p class="paragraph privacy__info">Souhaitez-vous accepter l'utilisation des cookies ?</p>
      <div class="privacy__actions">
        <button :class="`button ${!hasConsent && hadDenied ? 'button--disabled' : ''}`" @click="handleDeny">{{ denyButton }}</button>
        <button :class="`button ${hasConsent ? 'button--disabled' : ''}`" @click="handleAccept">{{ acceptButton }}</button>
      </div>
    </div>
    <h2 class="privacy__title">RÉGISTRE DES TRAITEMENTS</h2>
    <div class="privacy__container">
      <p class="privacy__subtitle">1. Propriétaire et responsable des traitements</p>
      <p class="paragraph privacy__info">Bastian van Osta</p>
      <p class="paragraph privacy__info">Camping Lestaubière, Pont St-Mamet</p>
      <p class="paragraph privacy__info">24140, Douville</p>
      <p class="paragraph privacy__info">France</p>
      <p class="paragraph privacy__info"><span>Téléphone :</span> <a href="tel:+33553829815">+33 5 53 82 98 15</a></p>
      <p class="paragraph privacy__info"><span>Email :</span> <a href="mailto:lestaubiere@gmail.com">lestaubiere@gmail.com</a></p>
    </div>
    <div class="privacy__container">
      <p class="privacy__subtitle">2. But des traitements de données</p>
      <p class="paragraph privacy__info">Mettre à jour le calendrier</p>
      <p class="paragraph privacy__info">Contact</p>
      <p class="paragraph privacy__info">Facturation</p>
    </div>
    <div class="privacy__container">
      <p class="privacy__subtitle">3. Catégorie de personnes</p>
      <p class="paragraph privacy__info">Visiteurs de la région Dordogne cherchant à réserver un emplacement pour une ou plusieurs nuits.</p>
    </div>
    <div class="privacy__container">
      <p class="privacy__subtitle">4. Catégorie de données</p>
      <p class="paragraph privacy__info">Nom, adresse, numéro de téléphone, adresse email, date d'arrivé, date de départ, nombre et âge des hôtes, equipements de séjour.</p>
    </div>
    <div class="privacy__container">
      <p class="privacy__subtitle">5. Les données ne sont partagées avec personne (sauf obligations légales) et seront gardées pendant le temps exigé par la loi.</p>
    </div>
    <div class="privacy__container">
      <p class="privacy__subtitle">6. Mesures de sécurité</p>
      <p class="paragraph privacy__info">Les données sont enregistrées dans un logiciel d'administration sécurisé par clé d'authentification.</p>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import Cookies from 'js-cookie';

  export default {
    name: 'l-privacy',

    metaInfo() {
      return {
        title: 'Privacy',
      };
    },

    computed: {
      denyButton() {
        return this.$i18n.t('footer.cookie.denyButton');
      },

      acceptButton() {
        return this.$i18n.t('footer.cookie.acceptButton');
      },

      hadDenied() {
        const consentCookie = Cookies.getJSON('hasConsent');

        return consentCookie === false;
      },

      ...mapState({
        hasConsent: state => state.app.hasConsent,
      }),
    },

    methods: {
      handleDeny() {
        this.denyConsent();
      },

      handleAccept() {
        this.acceptConsent();
      },

      ...mapActions({
        acceptConsent: 'acceptConsent',
        denyConsent: 'denyConsent',
      }),
    },
  };
</script>

<style scoped>
  .privacy {
    padding: 0 25px;
  }

  .privacy__title:not(:first-of-type) {
    margin-top: 50px;
  }

  .privacy__subtitle {
    max-width: 800px;
    margin: 0 auto 20px;
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 1.3;
  }

  .privacy__actions {
    max-width: 800px;
    margin: 10px auto;
  }

  .privacy__container {
    margin: 35px 0;
  }

  .privacy__info {
    margin-bottom: 5px;
    line-height: 20px;
  }

  .privacy__info span {
    font-weight: bold;
    margin-right: 10px;
  }

  .privacy__info a {
    color: #d9237f;
    text-decoration: none;
  }

  .privacy__info a:hover {
    text-decoration: underline;
  }

  .button {
    padding: 10px 25px;
    cursor: pointer;
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    .privacy {
      padding: 0 10px;
    }

    .privacy__actions button {
      margin: 5px 0;
    }
  }
</style>
