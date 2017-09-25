<template>
  <!--The following content belongs to a nested router view-->
  <div class="container" v-loading.body.lock="displayLoading">
    <!--Use computed data to splice the input itemList so that at normal size, each row has 4 items-->
    <div class="content-row" v-for="(item, index) in itemList" :key="index">
      <el-row :gutter="10">
        <el-col :xs="10" :sm="9" :md="8" :lg="6" v-for="(subItem, subIndex) in item" :key="subItem.title">
          <div class="content-item">
            <product-item :itemData="subItem"></product-item>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  import { defaultColumnCount } from '../stores/actions';
  import ProductItem from './product/ProductItem';

  export default {
    components: { ProductItem },
    name: 'content-grid',
    data() {
      return {
        loading: true,
      };
    },
    computed: {
      ...mapState(['displayRes', 'displayLoading']),
      itemList() {
        const matrix = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0, k = -1; i < this.displayRes.length; i++) {
          if (i % defaultColumnCount === 0) {
            k += 1; // Use global constance instead of hard code
            matrix[k] = [];
          }

          matrix[k].push(this.displayRes[i]);
        }

        return matrix;
      },
    },
  };
</script>
<style scoped>
  .container {
    padding: 5ch;
  }

  .content-row {
    margin: 2ch;
  }
</style>
