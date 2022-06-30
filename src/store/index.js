import { createStore } from 'vuex';
import news from './news';

export default createStore({
  modules: { news },
  strict: true,
});
