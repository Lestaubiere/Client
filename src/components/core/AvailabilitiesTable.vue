<template>
  <div class="table">
    <div class="table__header">
      <div class="table__header-item"
           v-for="(column, index) in header"
           :key="index">
        <span class="table__header-label">{{ column.label }}</span>
      </div>
    </div>
    <div class="table__content">
      <div class="table__row"
           v-for="(row, index) in rows"
           :key="index">
        <div class="table__column">
          <span>{{ row.label }}</span>
        </div>
        <div class="table__column"
             v-for="(column, index) in row.availabilities"
             :key="index">
          <span :class="column ? 'table__column--green' : 'table__column--red'">
            <span class="table__header-label" v-if="header[index + 1].label">{{ header[index + 1].label }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'l-availabilities-table',

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
    flex-basis: 10%;
    padding: 15px 0;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  .table__header-item:first-of-type {
    flex-basis: 20%;
  }

  .table__header-item:not(:first-of-type) {
    background-color: rgba(0,0,0,.015);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .table__header-label {
    display: block;
    font-weight: bold;
  }

  .table__row {
    display: flex;
    margin: 0 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .table__column {
    flex-basis: 10%;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  .table__column > span {
    display: flex;
    padding: 15px;
  }

  .table__column:first-of-type {
    flex-basis: 20%;
    font-weight: bold;
    background-color: rgba(0,0,0,.015);
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }

  .table__column:not(:first-of-type) {
    text-align: center;
  }

  .table__column--green,
  .table__column--red {
    width: 100%;
    height: 100%;
  }

  .table__column--green {
    background-color: #43A047;
  }

  .table__column--red {
    background-color: #F44336;
  }

  .table__column .table__header-label {
    display: none;
  }

  @media (max-width: 760px) {
    .table__header {
      display: none;
    }

    .table__row {
      flex-wrap: wrap;
      margin-bottom: 10px;
      border-bottom: none;
    }

    .table__column {
      flex-basis: calc(100% / 4);
    }

    .table__column span {
      justify-content: center;
    }

    .table__column:first-of-type {
      flex-basis: 100%;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .table__column:not(:first-of-type) {
      border-left: 1px solid rgba(0, 0, 0, 0.1);
      border-right: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .table__column:nth-of-type(5),
    .table__column:nth-of-type(9) {
      border-right: 1px solid rgba(0, 0, 0, 0.1);
    }

    .table__column .table__header-label {
      display: block;
      font-size: 0.8em;
      font-weight: normal;
      color: #ffffff;
    }
  }

  @media (max-width: 450px) {
    .table__column {
      flex-basis: 50%;
    }

    .table__column:nth-of-type(3),
    .table__column:nth-of-type(7) {
      border-right: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
</style>
