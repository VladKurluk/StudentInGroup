<template>
  <b-table 
    :data="isEmpty ? [] : data" 
    :bordered="isBordered" 
    :mobile-cards="hasMobileCards">

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
        <b-button rounded @click="editTableRow(props)" type="is-success" icon-pack="fas"
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
</template>

<script>
  export default {
    data: () =>({
      isEmpty: false,
      isBordered: true,
      hasMobileCards: true,
    }),
    props: ['data'],
    methods: {
      editTableRow (row) {
        // console.log(row)
      },
      deleteTableRow (row) {
        // console.log(row)
        this.data.splice(row.index, 1)
      }
    }
  }
</script>