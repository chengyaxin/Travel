export default {
	//mutations主要放的是同步的对数据的改变
	//当mutations很复杂的时候，可以借助Module对mutations,state,actions进行拆分
	changeCity(state,city)
	{
		state.city = city
		try{
			localStorage.city = city
		}catch(e){}
		
	}
}