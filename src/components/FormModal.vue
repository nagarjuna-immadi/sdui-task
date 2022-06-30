<template>
  <div class="modal fade" id="formModal" ref="formModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ newsItem.id ? 'Edit' : 'Add' }} News</h5>
          <button type="button" class="btn-close" @click="close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Title</label>
            <input
              type="text"
              class="form-control"
              placeholder="Title"
              name="title"
              v-model="newsItem.title"
            />
            <p class="text-danger mt-1 mb-0" v-if="!newsItem.title && showErrors">
              Please enter title
            </p>
          </div>
          <div class="mb-3">
            <label class="form-label">Author Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Author Name"
              name="author"
              v-model="newsItem.author"
            />
            <p class="text-danger mt-1 mb-0" v-if="!newsItem.author && showErrors">
              Please enter author name
            </p>
          </div>
          <div class="mb-3">
            <label class="form-label">News Description</label>
            <textarea
              class="form-control"
              name="body"
              rows="3"
              placeholder="News Description"
              v-model="newsItem.body"
            ></textarea>
            <p class="text-danger mt-1 mb-0" v-if="!newsItem.body && showErrors">
              Please enter news description
            </p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="close">Close</button>
          <button type="button" class="btn btn-primary" @click="save">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  name: 'FormModal',
  data() {
    return {
      modalInstance: undefined,
      newsItem: {},
      showErrors: false,
    };
  },
  mounted() {
    this.modalInstance = new Modal(this.$refs.formModal, {
      backdrop: 'static',
      keyboard: false,
    });
  },
  methods: {
    open(newsItemToEdit) {
      this.showErrors = false;
      if (newsItemToEdit) {
        this.newsItem = { ...newsItemToEdit };
      } else {
        this.newsItem = {
          id: 0,
          title: '',
          author: '',
          body: '',
        };
      }

      this.modalInstance.show();
    },
    close() {
      this.showErrors = false;
      this.modalInstance.hide();
    },
    save() {
      this.showErrors = true;
      if (this.newsItem.title && this.newsItem.author && this.newsItem.body) {
        this.$store.commit('news/saveNews', this.newsItem);
        this.modalInstance.hide();
      }
    },
  },
};
</script>
