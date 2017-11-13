<template>
  <div class="table">
    <div class="table__header">
      <div class="table__header-item"
           v-for="(column, index) in header"
           :key="index">
        <span class="table__header-label">{{ column.label }}</span>
        <div class="table__header-dates">
          <span class="table__header-date"
                v-for="(date, index) in column.dates"
                :key="index">
            {{ date }}
          </span>
        </div>
      </div>
    </div>
    <div class="table__content">
      <div class="table__row"
           v-for="(row, index) in rows"
           :key="index">
        <div class="table__column"
             v-for="(column, index) in row"
             :key="index">
          <span class="table__header-label" v-if="header[index].label">{{ header[index].label }}</span>
          <span>{{ column }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'l-price-table',

    props: {
      header: {
        type: Array,
        required: true,
      },
      rows: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .table {
    margin: 50px 0;
  }

  .table__header {
    display: flex;
    margin: 0 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .table__header-item {
    flex-basis: 20%;
    padding: 15px 0;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  .table__header-item:first-of-type {
    flex-basis: 40%;
  }

  .table__header-item:not(:first-of-type) {
    background-color: rgba(0,0,0,.015);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .table__header-label {
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .table__header-date {
    display: block;
  }

  .table__header-date:not(:last-of-type) {
    margin-bottom: 5px;
  }

  .table__row {
    display: flex;
    margin: 0 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .table__row:hover {
    background-color: rgba(0,0,0,.025);
  }

  .table__column {
    flex-basis: 20%;
    padding: 15px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  .table__column:first-of-type {
    flex-basis: 40%;
    font-weight: bold;
    background-color: rgba(0,0,0,.015);
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }

  .table__column:not(:first-of-type) {
    text-align: center;
  }

  .table__column .table__header-label {
    display: none;
  }

  @media (max-width: 760px) {
    .table__header {
      margin-bottom: 35px;
    }

    .table__header-item {
      flex-basis: calc(100% / 3);
    }

    .table__header-item:first-of-type {
      display: none;
    }

    .table__header-item:nth-of-type(2) {
      border-left: 1px solid rgba(0, 0, 0, 0.1);
    }

    .table__row {
      flex-wrap: wrap;
      margin-bottom: 10px;
    }

    .table__column {
      flex-basis: calc(100% / 3);
    }

    .table__column:first-of-type {
      flex-basis: 100%;
      text-align: center;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .table__column:nth-of-type(2) {
      border-left: 1px solid rgba(0, 0, 0, 0.1);
    }

    .table__column .table__header-label {
      display: block;
      font-size: 0.8em;
    }
  }

  @media (max-width: 450px) {
    .table__header {
      flex-wrap: wrap;
    }

    .table__header-item {
      flex-basis: 100%;
      border-left: 1px solid rgba(0, 0, 0, 0.1);
    }

    .table__row {
      border-bottom: 0;
    }

    .table__column {
      flex-basis: 100%;
      border-left: 1px solid rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
</style>
