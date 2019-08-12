<template>
  <div class="courses">
    <course-table 
      :tableType="'Courses'"
      @createTableRow="test" 
      :data="data"/>

    <add-course-modal 
      :modalState="isAddCourseModal"
      :actionType="'course'" 
      @add="addCourse" />

    
  </div>
</template>

<script>
// @ is an alias to /src
import CourseTable from '@/components/Table.vue'
import addCourseModal from '@/components/Modal.vue'

const data = [
  {
    course_name: 'Python-Base',
    course_code: 'P012345',
  },
  {
    course_name: 'Python-Database',
    course_code: 'P0234567',
  },
  {
    course_name: 'HTML',
    course_code: 'H3455678',
  }
]

export default {
  name: 'Students',
  components: {
    CourseTable,
    addCourseModal
  },
  data() {
    return {
      data,
      isAddCourseModal: false
    }
  },
  methods: {
    addCourse (course) {
      this.data.push(course)
    },
    test () {
      this.isAddCourseModal = true
      // console.log(data)
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
