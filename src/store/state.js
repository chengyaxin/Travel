//有的用户可能会关闭本地存储，如果关闭的话用localStorage会报错
let defaultCity = '上海'
try{
	if(localStorage.city)
	{
		defaultCity = localStorage.city
	}
}catch(e){}

export default {
	city:defaultCity
}