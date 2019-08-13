<template>
  <div class="students">

    <control 
      :table-title="'Students'" 
      @pgItem="pgValue"
      @search="searchInTable" />

    <student-table
      :pgCount="paginationItem"
      :searchParam="searchQuery"
      :data="data" />

    <add-student-modal 
      :actionType="'student'" 
      @add="addStudent" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import control from '@/components/Control.vue'
import StudentTable from '@/components/Table.vue'
import addStudentModal from '@/components/Modal.vue'

const data = [
  { 
    first_name: 'Jesse',
    last_name: 'Simmons',
    email: 'jesse@gmail.com',
    course: 'Python'
  },
  { 
    first_name: 'John',
    last_name: 'Jacobs',
    email: 'jacobs@mail.ru',
    course: 'JavaScript'
  },
  { 
    first_name: 'Tina',
    last_name: 'Gilbert',
    email: 'tinaG@gmail.com',
    course: 'Vue.js'
  }   
]

export default {
  name: 'Students',
  components: {
    control,
    StudentTable,
    addStudentModal,
  },
  data() {
    return {
      data,
      paginationItem: 0,
      searchQuery: ''
    }
  },
  methods: {
    addStudent (student) {
      this.data.push(student)
    },
    pgValue (data) {
      this.paginationItem = data
    },
    searchInTable (data) {
      this.searchQuery = data
    }
  }
}
</script>

<style lang="scss" scoped>
.students {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

</style>