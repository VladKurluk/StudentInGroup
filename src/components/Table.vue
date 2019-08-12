<template>
  <div>
    <div class="control-panel">
      <div class="control-panel__left">
        <b-button 
          rounded
          class="add-btn"
          @click="isEditModal = !isEditModal" 
          type="is-danger" 
          icon-pack="fas" 
          icon-right="plus"></b-button>

        <b-field>
          <b-input placeholder="Search..."
            rounded
            v-model="searchQuery"
            size="is-small"
            type="search"
            icon-pack="fas"
            icon="search">
          </b-input>
        </b-field>
      </div>

      <h1>{{tableType}}</h1>

      <b-field>
        <b-select v-model="perPage" placeholder="Select a character" rounded>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </b-select>
      </b-field>
    </div>

    <b-table 
      :data="isEmpty ? [] : search"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      :pagination-position="paginationPosition" 
      :bordered="isBordered" 
      :mobile-cards="hasMobileCards"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      >

      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" numeric>
          {{ props.index + 1 }}
        </b-table-column>

        <b-table-column v-if="props.row.first_name" field="name" label="Name">
          {{ props.row.first_name + ' ' + props.row.last_name }}
        </b-table-column>

        <b-table-column v-if="props.row.course_name" field="course_name" label="Course">
          {{ props.row.course_name }}
        </b-table-column>

        <b-table-column v-if="props.row.email" field="email" label="Email" centered>
          {{ props.row.email }}
        </b-table-column>

        <b-table-column v-if="props.row.course" field="course" label="Course" centered>
          <span class="tag is-success">
            {{ props.row.course }}
          </span>
        </b-table-column>

        <b-table-column v-if="props.row.course_code" field="course_code" label="Code" centered>
          <span class="tag is-success">
            {{ props.row.course_code }}
          </span>
        </b-table-column>

        <b-table-column label="Actions" width="160">
          <b-button class="edit-btn" rounded @click="editTableRow(props)" type="is-success" icon-pack="fas"
            icon-right="pen-nib" />

          <b-button rounded @click="deleteTableRow(props)" type="is-danger" icon-pack="fas"
            icon-right="trash" />
        </b-table-column>
      </template>

      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="emoticon-sad" size="is-large">
              </b-icon>
            </p>
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </b-table>

    <edit-modal :modalState="isEditModal" :editData="tableRowEditable" />
  </div>
</template>

<script>
  import editModal from '@/components/Modal.vue'
  
  export default {
    data: () =>({
      isEmpty: false,
      isBordered: true,
      hasMobileCards: true,
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: 'bottom',
      currentPage: 1,
      perPage: 2,
      isEditModal: false,
      tableRowEditable: null,
      searchQuery: ''
    }),
    components: {
      editModal
    },
    props: ['data', 'tableType'],
    computed: {
      search: function () {
        let query = this.searchQuery
        if(query) {
          return this.data.filter(function (name) {
            if(name.first_name) {
              return name.first_name.includes(query)
            } else {
              return name.course_name.includes(query)
            }
          })
        } else {
          return this.data
        }
      }
    },
    methods: {
      editTableRow (row) {
        this.tableRowEditable = row
        this.isEditModal = !this.isEditModal
      },
      deleteTableRow (row) {
        this.data.splice(row.index, 1)
      },
      addDataToTable () {
        this.$emit('createTableRow')
      }
    }
  }
</script>

<style lang="scss" scoped>
.control-panel {
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  &__left {
    display: flex;
  }
}

.add-btn {
  margin-right: 15px;
}

.edit-btn {
  margin-right: 30px;
}
</style>