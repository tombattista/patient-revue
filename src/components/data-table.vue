<template>
  <table class="dt-table">
    <thead>
      <tr class="dt-header-row">
        <th v-for="(header, i) in headers" :key="`${header}${i}`">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entity in data" :key="`entity-${entity.name}`" class="dt-data-row" >
        <td v-for="(header, i) in headers" :key="`${header}-${i}`" >
          <slot :name="`column${i}`" :entity="entity"></slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">

export default {
  name: 'DataTable',
  props: {
    headers: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
}
</script>
