<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.power}}</h2>
    <h3>{{$store.getters.mix20}}</h3>
    <h3>{{$store.getters.mix20length}}</h3>
    <h3>{{$store.getters.mix(6)}}</h3>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="add">+</button>
    <button @click="del">-</button>
    <button @click="addStudent">添加学生</button>
    <h2>{{$store.state.info}}</h2>
    <button @click="addinfo">添加</button>
    <button @click="aupinfo">修改</button>

    <!-- <hello :counter="counter"></hello> -->
    <hello></hello>

  </div>
</template>

<script>
import hello from "./components/HelloWorld.vue";

export default {
  data() {
    return {
      message: 'app组建',
      // counter:0
    }
  },
  components: {
    hello
  },
  methods: {
    add() {
      this.$store.commit('increment')
    },
    del() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      this.$store.commit('incrementCount', count)
    },
    addStudent() {
      const stu = { id: 12, name: 'wsx', age: 22 }
      this.$store.commit('addStudent', stu)
    },
    addinfo() {
      this.$store.commit('addinfo')
    },
    aupinfo() {
      // this.$store.dispatch('aUpdateInfo')
      this.$store.dispatch('aUpdateInfo', '携带信息')
      .then(res => {
        console.log('提交');
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>
