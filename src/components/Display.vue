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
          <el-input autofocus size="large" v-model="displayInput">
            <el-button slot="append" icon="search" v-on:click="handleIconClick"></el-button>
          </el-input>
        </div>
      </div>
    </div>
    <!--The following content should be a router view so that when hit search button, only this part will be updated-->
    <div class="container">
      <!--Use computed data to splice the input itemList so that at normal size, each row has 4 items-->
      <el-row :gutter="10">
        <el-col :xs="10" :sm="9" :md="8" :lg="6" v-for="(item, index) in itemList" :key="item.title">
          <div class="grid-content">
            <product-item :itemData="item"></product-item>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="page">
      <el-pagination
        layout="prev, pager, next"
        :page-size="12"
        :total="pageCount">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import ProductItem from './product/ProductItem';
  import sampleData from '../../test/sample-response';

  export default {
    components: { ProductItem },
    name: 'display',
    data() {
      return {
        searchInput: '',
        itemList: sampleData, // Use vuex for real implementation
      };
    },
    computed: {
      pageCount() {
        return this.itemList.length;
      },
      displayInput() {
        return this.$route.params.query;
      },
    },
    methods: {
      handleIconClick() {
        // Need vuex state management
        // TODO: How to bind this?
        console.log('Not finished');
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

  .container {
    padding: 5ch;
  }

  .page {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1ch;
    background-color: #efefef;
    text-align: center;
  }
</style>
