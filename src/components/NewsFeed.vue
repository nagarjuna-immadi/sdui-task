<template>
  <div class="newsFeed pt-3">
    <div class="row">
      <NewsCard
        class="col-12 col-sm-12 col-md-6 col-xl-4 mb-4 d-flex"
        v-for="article in news"
        :article="article"
        :key="article.id"
        @edit="openFormModal(article)"
      />
    </div>
    <FormModal ref="formModal" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NewsCard from './NewsCard.vue';
import FormModal from './FormModal.vue';

export default {
  name: 'NewsFeed',
  components: { NewsCard, FormModal },
  computed: {
    ...mapGetters({
      news: 'news/getNews',
    }),
  },
  methods: {
    openFormModal(newsItemToEdit) {
      this.$refs.formModal.open(newsItemToEdit);
    },
  },
};
</script>

<style scoped lang="scss"></style>
