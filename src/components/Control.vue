<template>
  <div class="control-panel">
    <b-field>
      <b-input 
        placeholder="Search..." 
        rounded 
        v-model="searchQuery" 
        @input="searchParam"
        size="is-small" 
        type="search"
        icon-pack="fas" 
        icon="search">
      </b-input>
    </b-field>


    <h1 class="title">{{tableTitle}}</h1>

    <b-field>
      <b-select v-model="itemInPage" placeholder="Select a character" rounded @input="setValue">
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </b-select>
    </b-field>
  </div>
</template>

<script>
export default {
  data: () =>({
    searchQuery: '',
    itemInPage: 2
  }),
  props: ['tableTitle'],
  methods: {
    setValue () {
      this.$emit('pgItem', this.itemInPage)
    },
    searchParam () {
      this.$emit('search', this.searchQuery)
    }
  }
}
</script>

<style lang="scss" scoped>
.control-panel {
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
}
</style>