<template>
<div>
    <b-button 
        rounded 
        class="add-btn"
        @click="modalToggle = !modalToggle"
        type="is-danger" 
        icon-pack="fas"
        icon-right="plus"></b-button>

    <transition name="modal">
        <div class="modal-mask" v-show="modalToggle">
            <div class="modal-wrapper" v-if="actionType === 'student'">
                <div class="modal-container">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Add student</p>
                    </header>


                    <div class="modal-body">
                        <b-field label="First Name">
                            <b-input type="text" v-model="first_name" :value="first_name"
                            placeholder="Your first name" required>
                            </b-input>
                        </b-field>
                        <b-field label="Last Name">
                            <b-input type="text" v-model="last_name" :value="last_name"
                            placeholder="Your last name" required>
                            </b-input>
                        </b-field>

                        <b-field label="Email">
                            <b-input type="email" v-model="email" :value="email"
                            placeholder="Your email" required>
                            </b-input>
                        </b-field>

                        <b-field label="Course">
                            <b-input type="text" v-model="course" :value="course"
                            placeholder="Course" required>
                            </b-input>
                        </b-field>
                    </div>

                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="modalToggle = !modalToggle">Close</button>
                        <button class="button is-primary" @click.prevent="addStudent">Add student</button>
                    </footer>
                </div>
            </div>

            <div class="modal-wrapper" v-if="actionType === 'course'">
                <div class="modal-container">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Add course</p>
                    </header>

                    <div class="modal-body">
                        <b-field label="Course Name">
                            <b-input type="text" v-model="course_name" :value="course_name"
                            placeholder="Course name" required>
                            </b-input>
                        </b-field>

                        <b-field label="Course code">
                            <b-input type="text" v-model="course_code" :value="course_code"
                            placeholder="Course code" required>
                            </b-input>
                        </b-field>
                    </div>

                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="modalToggle = !modalToggle">Close</button>
                        <button class="button is-primary" @click.prevent="addCourse">Add course</button>
                    </footer>
                </div>
            </div>
        </div>
    </transition>

    <transition name="modal">
        <div class="modal-mask" v-show="modalOn">
            <div class="modal-wrapper" v-if="editData">
                <div class="modal-container">
                    <header class="modal-card-head">
                        <p v-if="editData.row.email" class="modal-card-title">Edit student</p>
                        <p v-else class="modal-card-title">Edit course</p>
                    </header>

                    <div class="modal-body">
                            <b-field label="Course Name" v-if="editData.row.course_name">
                                <b-input type="text" v-model="editData.row.course_name" :value="editData.course_name"
                                placeholder="Course Name" required>
                                </b-input>
                            </b-field>

                            <b-field label="Course Code" v-if="editData.row.course_code">
                                <b-input type="text" v-model="editData.row.course_code" :value="editData.course_code"
                                placeholder="Course Code" required>
                                </b-input>
                            </b-field>

                            <b-field label="First Name" v-if="editData.row.first_name">
                                <b-input type="text" v-model="editData.row.first_name" :value="editData.row.first_name"
                                placeholder="Your first name" required>
                                </b-input>
                            </b-field>

                            <b-field label="Last Name" v-if="editData.row.last_name">
                                <b-input type="text" v-model="editData.row.last_name" :value="editData.row.last_name"
                                placeholder="Your last name" required>
                                </b-input>
                            </b-field>

                            <b-field label="Email" v-if="editData.row.email">
                                <b-input type="email" v-model="editData.row.email" :value="editData.row.email"
                                placeholder="Your email" required>
                                </b-input>
                            </b-field>

                            <b-field label="Course" v-if="editData.row.course">
                                <b-input type="text" v-model="editData.row.course" :value="editData.row.course"
                                placeholder="Course" required>
                                </b-input>
                            </b-field>
                    </div>

                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="editCourse">Close</button>
                        <button v-if="editData.row.email" class="button is-primary" @click.prevent="editStudent">Edit student</button>
                        <button v-else class="button is-primary" @click.prevent="editCourse">Edit course</button>
                    </footer>
                </div>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
export default {
  data: () =>({
    first_name: '',
    last_name: '',
    email: '',
    course: '',
    course_name: '', 
    course_code: '',
    modalToggle: false,
  }),
  props: ['actionType', 'modalOn', 'editData'],
  methods: {
    addStudent () {
        let studentData = {
           first_name: this.first_name,
           last_name: this.last_name,
           email: this.email,
           course: this.course
        }
        this.$emit('add', studentData)
        this.modalToggle = false
        this.first_name = ''
        this.last_name = ''
        this.email = ''
        this.course = ''
    },
    addCourse () {
        let courseData = {
           course_name: this.course_name,
           course_code: this.course_code,
        }
        this.$emit('add', courseData)
        this.modalToggle = false
        this.course_name = ''
        this.course_code = ''
    },
    editCourse () {
        this.$emit('closeEdit')
    },
    editStudent () {
       this.$emit('closeEdit') 
    }
  }
}
</script>

<style lang="scss" scoped>
.add-btn {
    position: fixed;
    bottom: 50px;
    right: 50px;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 0px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-body {
  margin: 0px;
  padding: 10px;
}


.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>