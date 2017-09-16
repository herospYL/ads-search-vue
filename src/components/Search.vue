<template>
  <div class="search">
    <div class="title row">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6"><div class="grid-content">
          <div>
            <div class="title-component" id="title-image">
              <img src="../assets/ic_shopping_cart_large.svg">
            </div>
            <div class="title-component" id="title-text">
              <h1>Ads Search</h1>
            </div>
          </div>
        </div></el-col>
      </el-row>
    </div>
    <div class="search row">
      <el-row>
        <el-col :span="12" :offset="6">
          <div class="grid-content">
            <el-input autofocus size="large" v-model="searchInput">
              <el-button slot="append" icon="search"></el-button>
            </el-input>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="repository row">
      <el-tooltip class="item" effect="dark" content="Github Repository" placement="bottom">
        <a href="https://github.com/herospYL/ads-search-vue">
          <img src="../assets/GitHub-Mark-32px.png">
        </a>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search',
    data() {
      return {
        msg: 'Welcome to Ads Search Vue.js App',
        searchInput: '',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  h1, h2 {
    font-weight: bold;
  }

  a {
    color: #42b983;
  }

  .row {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  .title-component {
    float:left;
  }

  #title-image{
    margin-left:10%;
  }

  #title-text{
    margin-left:5%;
  }

</style>
