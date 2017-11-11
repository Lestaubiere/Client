<template>
  <transition name="modal" v-if="visible">
    <div class="modal">
      <div class="modal__mask" @click="hideModal"></div>
      <div class="modal__container">
        <button class="modal__close" @click="hideModal">
          <svg viewBox="0 0 100 125"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
            <g transform="translate(0,-952.36218)">
              <path style="fill:white;" d="m 72.62742,979.73477 c -1.56214,-1.56213 -4.09479,-1.56207 -5.65686,0 L 50,996.7053 33.02944,979.73477 c -1.56207,-1.56207 -4.09471,-1.56213 -5.65686,0 -1.56213,1.56213 -1.56207,4.09483 0,5.65683 l 16.97057,16.9706 -16.97057,16.9706 c -1.56207,1.562 -1.56213,4.0947 0,5.6568 1.56214,1.5621 4.09479,1.5621 5.65686,0 L 50,1008.019 l 16.97056,16.9706 c 1.56207,1.5621 4.09471,1.5621 5.65686,0 1.56213,-1.5621 1.56207,-4.0948 0,-5.6568 l -16.97057,-16.9706 16.97057,-16.9706 c 1.56207,-1.562 1.56213,-4.0947 0,-5.65683 z" fill="#000000" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/>
            </g>
          </svg>
        </button>
        <img class="modal__image" :src="imagePath" />
      </div>
    </div>
  </transition>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  import { HIDE_IMAGE_MODAL } from '@/store/modules/modal/mutation-types';

  export default {
    name: 'l-image-modal',

    computed: mapState({
      visible: state => state.modal.visible,
      imagePath: state => state.modal.imagePath,
    }),

    methods: mapActions({
      hideModal: HIDE_IMAGE_MODAL,
    }),
  };
</script>

<style scoped>
  .modal {
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity .3s ease;
  }

  .modal__mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .35);
  }

  .modal__container {
    position: relative;
    display: flex;
    max-width: 90%;
    height: 90%;
    margin: 0 auto;
    border-radius: 3px;
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
    font-size: 0;
    transition: all .3s ease;
  }

  .modal__image {
    max-height: 100%;
  }

  .modal__close {
    position: absolute;
    right: 0;
    width: 50px;
    cursor: pointer;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal__container,
  .modal-leave-active .modal__container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
