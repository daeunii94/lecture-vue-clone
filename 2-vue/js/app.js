import SearchModel from './models/SearchModel.js'

new Vue({
    el: '#app',
    data: {
        query : '', //입력 데이터 받아서 저장
        submitted: false,
        tabs: ['추천 검색어', '최근 검색어'],
        searchResult: []
    },
    created() { //view instance 생성될때
        this.selectedTab = this.tabs[0]
    },
    methods: {
        onSubmit(e) {
            this.search()
        },
        onKeyup() { 
            if (!this.query.length) this.onReset() //입력값이 없을경우,빌 경우, onReset
        },
        onReset() {
            this.resetForm()
  
        },
        search() {
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
        },
        resetForm() {
            this.query = '' 
            this.submitted = false
            this.searchResult = []
        }
    }
})
