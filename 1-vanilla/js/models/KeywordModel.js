export default {
  data: [ //키워드만 가지고있음(추천 키워드)
    {keyword: '이탈리아'}, 
    {keyword: '세프의요리'}, 
    {keyword: '제철'}, 
    {keyword: '홈파티'}
  ],

  list() {
    return new Promise(res => {
      setTimeout(() => { 
        res(this.data)
      }, 200)
    })
  }
}
