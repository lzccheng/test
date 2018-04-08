import Mock from 'mockjs'
let Random = Mock.Random
 
const produceData =  () => {
  let arr = []
  for (let i = 0; i < 10; i++) {
    let newArticleObject = {
      title: Random.csentence(5),
      content: Random.cparagraph(5, 7),
      time: Random.date() + ' ' + Random.time(),
      location: Random.city()
    }
    arr.push(newArticleObject)
  }
  return {arr}
}
// 第三个参数可以是对象也可以是返回对象的函数
Mock.mock('/article', 'get', produceData)