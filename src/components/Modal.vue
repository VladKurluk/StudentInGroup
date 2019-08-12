<template>
  <b-modal :active.sync="modalState" has-modal-card>
    <form action="" v-if="actionType === 'student'">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Add student</p>
        </header>
        <section class="modal-card-body">
          <b-field label="First Name">
            <b-input type="text" v-model="studentData.first_name" :value="studentData.first_name"
              placeholder="Your first name" required>
            </b-input>
          </b-field>

          <b-field label="Last Name">
            <b-input type="text" v-model="studentData.last_name" :value="studentData.last_name"
              placeholder="Your last name" required>
            </b-input>
          </b-field>

          <b-field label="Email">
            <b-input type="email" v-model="studentData.email" :value="studentData.email"
              placeholder="Your email" required>
            </b-input>
          </b-field>

          <b-field label="Course">
            <b-input type="text" v-model="studentData.course" :value="studentData.course"
              placeholder="Course" required>
            </b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="$parent.close()">Close</button>
          <button class="button is-primary" @click.prevent="addStudent">Add</button>
        </footer>
      </div>
    </form>

    <form v-if="actionType === 'course'">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Add course</p>
        </header>
        <section class="modal-card-body">
          <b-field label="Course Name">
            <b-input type="text" v-model="courseData.course_name" :value="courseData.course_name"
              placeholder="Course Name" required>
            </b-input>
          </b-field>

          <b-field label="Course Code">
            <b-input type="text" v-model="courseData.course_code" :value="courseData.course_code"
              placeholder="Course Code" required>
            </b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="$parent.close()">Close</button>
          <button class="button is-primary" @click.prevent="addCourse">Add</button>
        </footer>
      </div>  
    </form>
  </b-modal>
</template>

<script>
export default {
  data: () =>({
    studentData: {
      first_name: '',
      last_name: '',
      email: '',
      course: ''
    },
    courseData: {
      course_name: '', 
      course_code: ''
    }
  }),
  props: ['modalState', 'actionType'],
  methods: {
    addStudent () {
      this.$emit('add', this.formData)
      this.modalState = false
    },
    addCourse () {
      this.$emit('add', this.courseData)
      this.modalState = false
    },
  }
}
</script>