<template>
  <div class="students">

    <student-table 
      :tableType="'Students'" 
      @createTableRow="test" 
      :data="data"
      />

      <add-student-modal 
        :modalState="isAddStudentModal"
        :actionType="'student'" 
        @add="addStudent"
      />
    
  </div>
</template>

<script>
// @ is an alias to /src
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
    StudentTable,
    addStudentModal,
  },
  data() {
    return {
      data,
      isAddStudentModal: false,
    }
  },
  methods: {
    addStudent (student) {
      this.data.push(student)
    },
    test () {
      this.isAddStudentModal = true
      console.log('Вызови модалку')
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

.control-panel {
  display: flex;
  justify-content: space-between;

  &__left {
    display: flex;
  }
}
</style>