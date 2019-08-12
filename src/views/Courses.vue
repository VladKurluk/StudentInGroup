<template>
  <div class="courses">
    <div class="control-panel">
      <div class="control-panel__left">
        <b-button rounded @click="isAddCourseModal = !isAddCourseModal" type="is-danger" icon-pack="fas" icon-right="plus">
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

      <h1>Courses</h1>

      <b-field>
        <b-select placeholder="Select a character" rounded>
          <option value="5">5</option>
          <option value="10">10</option>
        </b-select>
      </b-field>
    </div>

    <course-table :data="data"/>

    <add-course-modal :modalState="isAddCourseModal" :actionType="'course'" @add="addCourse" />

  </div>
</template>

<script>
// @ is an alias to /src
import CourseTable from '@/components/Table.vue'
import addCourseModal from '@/components/Modal.vue'

export default {
  name: 'Students',
  components: {
    CourseTable,
    addCourseModal
  },
  data() {
    const data = [
      { course_name: 'Python-Base', 
        course_code: 'P012345',
      },
      { course_name: 'Python-Database', 
        course_code: 'P0234567',
      },
      { course_name: 'HTML', 
        course_code: 'H3455678', 
      }
    ]
    return {
      data,
      isAddCourseModal: false
    }
  },
  methods: {
    addCourse (course) {
      this.data.push(course)
    }
  }
}
</script>


<style lang="scss" scoped>
.courses {
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
