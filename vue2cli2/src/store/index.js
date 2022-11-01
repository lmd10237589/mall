import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      { id: 1, name: 'aaa', age: 18 },
      { id: 2, name: 'bbb', age: 22 },
      { id: 3, name: 'ccc', age: 32 },
      { id: 4, ame: 'ddd', age: 12 },
    ],
    info: {
      name: 'dadada',
      age: 11
    }
  },
  getters: {
    power(state) {
      return state.counter * state.counter
    },
    mix20(state) {
      return state.students.filter(a => a.age < 20)
    },
    mix20length(state, getters) {
      return getters.mix20.length
    },
    mix(state) {
      // return function (age) {
      //   return state.students.filter(a=>a.age>age)
      // }
      return age => { return state.students.filter(a => a.age > age) }
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, count) {
      state.counter += count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    addinfo(state) {
      // Vue.set(state.info, 'address', '洛杉矶')
      // Vue.delete(state.info, 'age')
      state.info.name = 'hehehe'
    }
  },
  actions: {
    // aUpdateInfo(context){
    //   setTimeout(() => {
    //     context.commit('addinfo')
    //   }, 2000);
    // }

    aUpdateInfo(context,payload){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('addinfo')
          console.log(payload);
          resolve('qqqqqqq')
        }, 2000);
      })
    }
    
  },
  modules: {
  }
})
