<template>
  <div class="courses">

    <control 
      :table-title="'Courses'" 
      @pgItem="pgValue" 
      @search="searchInTable" />

    <course-table 
      :pgCount="paginationItem"
      :searchParam="searchQuery"
      :data="data"/>

    <add-course-modal 
      :actionType="'course'" 
      @add="addCourse" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import control from '@/components/Control.vue'
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
  name: 'Courses',
  components: {
    control,
    CourseTable,
    addCourseModal
  },
  data() {
    return {
      data,
      paginationItem: 0,
      searchQuery: '',
    }
  },
  methods: {
    addCourse (course) {
      this.data.push(course)
      console.log(course)
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
.courses {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
</style>
