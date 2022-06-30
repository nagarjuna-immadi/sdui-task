<template>
  <div class="home">
    <NewsFilters />
    <NewsFeed />
  </div>
</template>

<script>
import NewsFeed from '@/components/NewsFeed.vue';
import NewsFilters from '@/components/NewsFilters.vue';

export default {
  name: 'HomeView',
  components: {
    NewsFilters,
    NewsFeed,
  },
};
</script>
