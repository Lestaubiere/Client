<template>
  <div class="header-widget">
    <div class="header-widget__dates">
      <div class="header-widget__opening">
        <p class="header-widget__label">{{ $t('header.widget.opening') }}</p>
        <p class="header-widget__value">
          <span>{{ $t('header.widget.opening_day') }}</span>
          {{ $t('header.widget.opening_month') }}
        </p>
      </div>
      <div class="header-widget__closing">
        <p class="header-widget__label">{{ $t('header.widget.closing') }}</p>
        <p class="header-widget__value">
          <span>{{ $t('header.widget.closing_day') }}</span>
          {{ $t('header.widget.closing_month') }}
        </p>
      </div>
    </div>
    <div class="header-widget__weather">
      <span class="header-widget__weather-label">{{ $t('header.widget.weather') }}</span>
      <span class="header-widget__weather-value">
        <span class="header-widget__weather-icon wi wi-day-sunny"></span>
        <span>32° C</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'l-header-widget',
  };
</script>

<style scoped>
  @import "~weather-icons/css/weather-icons.css";

  .header-widget {
    min-width: 300px;
  }

  .header-widget__dates {
    display: flex;
  }

  .header-widget__opening,
  .header-widget__closing,
  .header-widget__weather {
    padding: 15px 10px;
    margin: 2px;
    background-color: rgba(0, 0, 0, .75);
  }

  .header-widget__opening,
  .header-widget__closing {
    flex-basis: calc(50% - 4px);
  }

  .header-widget__opening {
    border-radius: 5px 0 0 0;
  }

  .header-widget__closing {
    border-radius: 0 5px 0 0;
  }

  .header-widget__weather {
    border-radius: 0 0 5px 5px;
  }

  .header-widget__label {
    margin-bottom: 15px;
    color: #ffffff;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  .header-widget__label::after {
    content: '';
    display: block;
    width: 25px;
    height: 1px;
    margin-top: 8px;
    background-color: #ffffff;
  }

  .header-widget__value {
    color: #ffffff;
    font-size: 0.75rem;
  }

  .header-widget__value span {
    margin-right: 5px;
    font-size: 1.4rem;
  }

  .header-widget__weather {
    display: flex;
    justify-content: space-between;
  }

  .header-widget__weather-label {
    padding: 5px 0;
    color: #ffffff;
    font-size: .85rem;
  }

  .header-widget__weather-value {
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  .header-widget__weather-icon {
    margin-right: 15px;
    font-size: 1.5rem;
  }
</style>
