import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
Vue.use(Vuex)



//通过vuex创建一个仓库，仓库中包含state,actions,nutations
export default new Vuex.Store({
	state:state,
	//异步方法可以放到actions中
	// actions:{
	// 	changeCity(ctx,city)
	// 	{
	// 		//此city为List.vue中通过派发传过来的city,执行此函数时调用mutations中对应的方法
	// 		ctx.commit('changeCity',city)
	// 	}
	// },
	mutations:mutations,
	//当需要根据state数据，算出新的数据时可以用getters,避免数据冗余
	getters:{
		doubleCity(state)
		{
			return state.city + ' ' + state.city
		}
	}
})