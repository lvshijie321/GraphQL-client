<template>
  <div class="hello">
    <h1 class="title"> 分别处理 GraphQL 和 RESTful 请求</h1>
    <button @click="getApi1">RESTful 方式请求 api</button>
    <button @click="getApi2">GraphQL 方式请求 api</button>
    <ul v-if="flag" class="list">
      <li v-for="(item, index) in list" :key="index">{{item.context + ' - ' + item.ftime}}</li>
    </ul>
    <div class="msg" v-else>{{message}}</div>
    <a style="cursor: pointer;" @click="$router.go(-1)">返回</a>
  </div>
</template>

<script>
import gql from "graphql-tag";
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
      this.$axios1('api1')
        .then((response) => {
          this.list = response
          this.flag = true
        })
        .catch(function (error) {
          console.log(error);
        });


    },
    getApi2() {
      debugger
      console.log(gql `{
            hello {
              a
              b
            }
          }`)
      //todo 缓存问题没解决
      this.$apollo
        .query({
          query: gql `{
            hello: {
              a
              b
            }
          }`,
          // variables: {
          //   code: this.$route.params.code
          // },
          client: 'api2'      //如果请求不同的路径用client标识选的路径
        })
        .then(response => {
          this.message = response.data.hello
          this.flag = false
        })
        .catch(error => {

        })


      // const param = {
      //   query: `{
      //     hello
      //   }`
      // }
      // this.$axios('api2', param)
      //   .then((response) => {
      //     this.message = response.hello
      //     this.flag = false
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });


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
