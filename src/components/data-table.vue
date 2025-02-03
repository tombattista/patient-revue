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
      <tr v-for="entity in data" :key="`entity-${entity.id}`" class="dt-data-row" >
        <td v-for="(header, i) in headers" :key="`${header}-${i}`" >
          <slot :name="`column${i}`" :entity="entity"></slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">

/*-----------------------------------------------------------------------------------
 * This DataTable component displays a generic HTML data table
 * Requirements:
 *  - string array for table headers
 *  - Array of custom data type objects
 *    - The data objects must have an "id" field.
 *-----------------------------------------------------------------------------------*/
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
