<template>
  <div class="wrap">
      <router-link to="/helloWorld" >
        <a>使用 Axios 处理 GraphQL 和 RESTful 请求</a>
      </router-link>
      <router-link to="/helloWorld1">
        <a>分别处理 GraphQL 和 RESTful 请求</a>
      </router-link>
      <router-link to="/page">
        <a>分页</a>
      </router-link>
      <router-link to="/auth">
        <a>鉴权</a>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: [],
      message: '',
      flag: true,
    }
  },
  mounted() {
  },
  methods: {
    getApi1() {
      this.$axios('api1')
        .then((response) => {
          this.list = response
          this.flag = true
        })
        .catch(function (error) {
          console.log(error);
        });


    },
    getApi2() {
      const param = {
        query: `{
          hello
        }`
      }
      this.$axios('api2', param)
        .then((response) => {
          this.message = response.hello
          this.flag = false
        })
        .catch(function (error) {
          console.log(error);
        });


//             {
//   articles {
//     total_items # 总数
//     page_no     # 当前页号
//     page_items  # 每页结果数
//     pages       # 总页数
//     rows: {     # 分页结果
//       title,
//       author,
//       published_at
//     }
//   }
// }
//           `,
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  line-height: 100px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px auto;
  width: 600px;
}
.msg {
  text-align: center;
  margin-top: 50px;
}
</style>
