<template>
  <div>
    <div class="card newsCard">
      <div class="card-body">
        <h5 class="card-title">{{ article.title }}</h5>
        <p class="card-text">{{ article.body }}</p>
      </div>
      <div class="card-footer d-flex justify-content-between">
        <div class="text-truncate pe-4">{{ article.author }}</div>
        <div class="edit ms-auto" @click="edit">Edit</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  emits: ['edit'],
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    edit() {
      this.$emit('edit');
    },
  },
};
</script>

<style scoped lang="scss">
.edit {
  cursor: pointer;
  text-decoration: underline;
}
.card-body {
  align-items: stretch;
}

.newsCard {
  width: 100%;
}
</style>
