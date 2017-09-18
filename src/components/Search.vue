<template>
  <div class="search">
    <div class="title row">
      <img src="../assets/logo.png">
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
  h1, h2 {
    font-weight: bold;
  }

  .row {
    margin-top: 5ch;
    margin-bottom: 5ch;
  }

  .title {
    margin-top: 20ch;
  }

</style>
