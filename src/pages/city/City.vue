<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
		<city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
	</div>
</template>
<script>
import axios from 'axios'
import CityHeader from "./components/Header.vue"
import CitySearch from "./components/Search.vue"
import CityList from "./components/List.vue"
import CityAlphabet from "./components/Alphabet.vue"
export default {
	name:"City",
	components:{
		CityHeader,
		CitySearch,
		CityList,
		CityAlphabet
	},
	data(){
		return {
			cities:{},
			hotCities:[],
			letter:''
		}
	},
	methods:{
		getCityInfo()
		{
			axios.get("/api/city.json")
			.then((ret)=>{
				if(ret.status == 200)
				{
					this.cities = ret.data.data.cities
					this.hotCities = ret.data.data.hotCities
				}
			})
		},
		handleLetterChange (letter) {
			//监听Alphabet传过来的change
	      this.letter = letter
	    }
	},
	mounted()
	{
		this.getCityInfo()
	}
}
</script>
<style lang="stylus" scoped>

</style>