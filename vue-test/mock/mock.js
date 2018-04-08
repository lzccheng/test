import Mock from 'mockjs' // 引入mockjs

const Random = Mock.Random // 获取 mock.Random 对象

const data = ()=>{
	let arr = []
	let Obj = {
		title: Random.csentence(5,100), // Random.csentence( min, max )
		pic: Random.dataImage('300*250','mock的图片'),// Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
		name: Random.cname(),// Random.cname() 随机生成一个常见的中文姓名
		date: Random.date() + ' ' + Random.time()// Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
	}
	arr.push(Obj)
	return {arr}
}

export default Mock.mock('/api/news','get',data)