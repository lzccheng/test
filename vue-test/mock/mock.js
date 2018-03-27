rquire.config({
	paths: {
		mock: 'http://mockjs.com/dist/mock'
	}
})

require(['mock'],function(Mock){
	var data = Mock.mock({
		'list|1-10': 0
	})

	document.bocy.innerHTML += '<pre>'+JSON.stringify(data,null,4)+'</pre>'
})

const Mock = require('mockjs')
Mock.mock('/api/data',(res,req)=>{
	return {
		data:['123',456]
	}
})