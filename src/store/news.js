import sampleNews from './data';

export default {
  namespaced: true,
  state: () => ({
    searchTerm: '',
    sortBy: 'title',
    sortOrder: 'ASC',
    news: [...sampleNews],
  }),
  getters: {
    getSearchTerm: (state) => state.searchTerm,
    getSortBy: (state) => state.sortBy,
    getSortOrder: (state) => state.sortOrder,
    getNews: (state, getters) => getters.getSortedNews(getters.getFilteredNews),
    getFilteredNews: (state) => {
      let filteredNews = state.news;
      const term = state.searchTerm.trim().toLowerCase();

      if (term) {
        filteredNews = filteredNews.filter((item) => item.title.toLowerCase().indexOf(term) !== -1);
      }
      return filteredNews;
    },
    getSortedNews: (state) => (newsToSort) => {
      const { sortBy, sortOrder } = state;
      const sortedNews = [...newsToSort];
      sortedNews.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

      if (sortOrder === 'DESC') {
        sortedNews.reverse();
      }
      return sortedNews;
    },
  },
  mutations: {
    updateFilter(state, payload) {
      state[payload.key] = payload.value;
    },
    saveNews(state, newsItem) {
      if (newsItem.id === 0) {
        const newItem = { ...newsItem };
        newItem.id = state.news.length + 1;
        state.news.push(newItem);
      } else {
        const itemIndex = state.news.findIndex((item) => item.id === newsItem.id);
        state.news[itemIndex] = newsItem;
      }
    },
  },
};
