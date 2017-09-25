<template>
  <el-card>
    <a :href="itemData.url">
      <img :src="itemData.image" class="image">
    </a>
    <div style="padding: 14px;">
      <div class="title">
        <a :href="itemData.url">
          <span>{{itemData.title}}</span>
        </a>
      </div>
      <div class="bottom">
        <div class="price">
          <span>{{ itemData.price }}</span>
        </div>
        <div>
          <!--This is only for flex box alignment-->
        </div>
        <div class="star">
          <el-rate v-model="itemData.star" disabled show-text text-color="#ff9900" text-template="{value}"></el-rate>
        </div>
      </div>
    </div>
  </el-card>
</template>
<script>
  export default {
    name: 'product-item',
    props: {
      itemData: Object,
      default: null,
    },
    data() {
      return {};
    },
  };
</script>
<style scoped>
  .title {
    margin-top: 2ch;
    line-height: 2ch;
    text-align: left;
    font-size: larger;
  }

  .title a {
    text-decoration: none;
    color: #0066c0;
  }

  .title a:hover {
    color: #c45500;
  }

  .bottom {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
  }

  .image {
    display: block;
    margin: auto;
    width: 40%;
  }

  .price {
    font-size: larger;
    font-weight: bold;
    color: #999;
    padding-top: 2ch;
  }

  .star {
    padding-top: 2ch;
  }
</style>
