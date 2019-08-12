<template>
  <div class="students">
    <div class="control-panel">
      <div class="control-panel__left">
        <b-button rounded @click="isAddStudentModal = !isAddStudentModal" type="is-danger" icon-pack="fas" icon-right="plus">
        </b-button>

        <b-field>
          <b-input placeholder="Search..."
            rounded
            size="is-medium"
            type="search"
            icon-pack="fas"
            icon="search">
          </b-input>
        </b-field>
      </div>

      <h1>Students</h1>

      <b-field>
        <b-select placeholder="Select a character" rounded>
          <option value="5">5</option>
          <option value="10">10</option>
        </b-select>
      </b-field>
    </div>

    <student-table :data="data"/>

    <add-student-modal :modalState="isAddStudentModal" :actionType="'student'" @add="addStudent" />

  </div>
</template>

<script>
// @ is an alias to /src
import StudentTable from '@/components/Table.vue'
import addStudentModal from '@/components/Modal.vue'

export default {
  name: 'Students',
  components: {
    StudentTable,
    addStudentModal
  },
  data() {
    const data = [
      { 'first_name': 'Jesse', 
        'last_name': 'Simmons', 
        'email': 'jesse@gmail.com',
        'course': 'Python'
      },
      { 'first_name': 'John', 
        'last_name': 'Jacobs', 
        'email': 'jacobs@mail.ru',
        'course': 'JavaScript' 
      },
      { 'first_name': 'Tina', 
        'last_name': 'Gilbert', 
        'email': 'tinaG@gmail.com',
        'course': 'Vue.js' 
      }
    ]

    return {
      data,
      isAddStudentModal: false,
    }
  },
  methods: {
    addStudent (student) {
      this.data.push(student)
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