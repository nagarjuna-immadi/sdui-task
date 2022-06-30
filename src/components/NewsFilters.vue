<template>
  <div class="newsFilters pt-3 pb-4 border-bottom mb-3">
    <div class="row">
      <div class="col-12 col-md-9 mb-3 mb-md-0">
        <div class="row">
          <div class="col-12 col-md-4 mb-3 mb-md-0">
            <label>Search Title</label>
            <input
              type="text"
              class="form-control"
              name="searchTerm"
              placeholder="Enter Search Term"
              :value="searchTerm"
              @input="updateFilter"
            />
          </div>
          <div class="col-12 col-md-4 mb-3 mb-md-0">
            <label>Sort By</label>
            <select class="form-select" name="sortBy" :value="sortBy" @change="updateFilter">
              <option value="title">Title</option>
              <option value="body">Body</option>
              <option value="author">Author</option>
            </select>
          </div>
          <div class="col-12 col-md-4">
            <label>Sort Order</label>
            <select class="form-select" name="sortOrder" :value="sortOrder" @change="updateFilter">
              <option value="ASC">Ascending</option>
              <option value="DESC">Descending</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3 d-flex align-items-end">
        <FormModal ref="formModal" />
        <button class="btn btn-outline-primary ms-auto" @click="openFormModal">+ Add News</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FormModal from './FormModal.vue';

export default {
  name: 'NewsFilters',
  components: {
    FormModal,
  },
  computed: {
    ...mapGetters({
      searchTerm: 'news/getSearchTerm',
      sortBy: 'news/getSortBy',
      sortOrder: 'news/getSortOrder',
    }),
  },
  methods: {
    updateFilter(event) {
      this.$store.commit('news/updateFilter', {
        key: event.target.name,
        value: event.target.value,
      });
    },
    openFormModal() {
      this.$refs.formModal.open();
    },
  },
};
</script>
