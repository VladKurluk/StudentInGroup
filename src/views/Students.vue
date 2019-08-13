<template>
  <div class="students">

    <control 
      :table-title="'Students'" 
      @pgItem="pgValue"
      @search="searchInTable" />

    <student-table
      :pgCount="paginationItem"
      :searchParam="searchQuery"
      :data="data"
      @remove="removeStudent" />

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
      this.saveStudents()
    },
    pgValue (data) {
      this.paginationItem = data
    },
    searchInTable (data) {
      this.searchQuery = data
    },
    saveStudents() {
      const parsed = JSON.stringify(this.data)
      localStorage.setItem('students', parsed)
    },
    removeStudent (studentData) {
      let students, vm
      vm = this

      if (localStorage.getItem('students') === null) {
        students = this.data;
      } else {
        students = JSON.parse(localStorage.getItem('students'));
      }

      students.forEach(function(student, index) {
        if (student.email === studentData.row.email) {
          students.splice(index, 1)
          vm.data.splice(index, 1)
        }
      });

      localStorage.setItem('students', JSON.stringify(students) )

    }
  },
  mounted () {
    if (localStorage.students) {
      this.data = JSON.parse(localStorage.getItem('students'))
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