<template>
  <div class="display">
    <div class="header">
      <div class="flex-container">
        <div class="grid-content" id="grid-img">
          <router-link :to="{ name: 'Search' }">
            <img id="header-img" src="../assets/logo.png">
          </router-link>
        </div>
        <div class="grid-content" id="grid-input">
          <el-input autofocus size="large" v-model="searchInput" @keyup.enter.native="handleTrigger">
            <el-button slot="append" icon="search" @click="handleTrigger"></el-button>
          </el-input>
        </div>
      </div>
    </div>
    <div class="content">
      <router-link :to="{ path: 'Content' }"></router-link>
      <router-view></router-view>
    </div>
    <div :class="pageShow" v-if="!displayLoading">
      <el-pagination
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="displayTotalCount">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex';
  import Router from 'vue-router';
  import { defaultColumnCount, defaultPageCount } from '../stores/actions';
  import ContentGrid from './ContentGrid';

  const router = new Router();
  const contentTypeStr = ['post', 'error'];

  export default {
    components: { ContentGrid },
    name: 'display',
    data() {
      return {
        searchInput: this.$route.query.query ? this.$route.query.query : '',
        contentType: contentTypeStr[0],
        pageSize: defaultPageCount,
      };
    },
    created() {
      this.handleNewSearch();
    },
    watch: {
      $route: 'handleNewSearch',
    },
    computed: {
      ...mapState(['displayTotalCount', 'displayLoading']),
      pageShow() {
        return this.displayTotalCount <= defaultColumnCount ? 'page-less' : 'page-more';
      },
    },
    methods: {
      ...mapActions(['sendSearch']),
      handleTrigger() {
        router.push({ path: '/search/content', query: { query: this.searchInput } });
      },
      handleNewSearch() {
        this.sendSearch(this.searchInput);
      },
    },
  };
</script>
<style scoped>
  .header {
    background-color: #efefef;
  }

  .flex-container {
    display: -webkit-flex;
    display: flex;
    align-items: flex-start;
  }

  #grid-img {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 40ch
  }

  #header-img {
    width: 50%;
    height: auto;
  }

  #grid-input {
    width: 83%;
    align-self: center;
  }

  .flex-container .grid-content {
    margin: 1ch 1ch 1ch -5ch;

  }

  .page-less {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1ch;
    background-color: #efefef;
    text-align: center;
  }

  .page-more {
    position: relative;
    padding: 1ch;
    background-color: #efefef;
    text-align: center;
  }
</style>
