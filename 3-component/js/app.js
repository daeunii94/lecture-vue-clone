import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js'

import FormComponent from './components/FormComponent.js'
new Vue({
    el: '#app',
    data: {
        query : '', //입력 데이터 받아서 저장
        submitted: false,
        tabs: ['추천 검색어', '최근 검색어'],
        selectedTab: '',
        keywords: [], //추천검색어
        history: [], //최근검색어
        searchResult: []
        
    },
    components: {
        'search-form' : FormComponent
        
    },
    created() { //view instance 생성될때
        this.selectedTab = this.tabs[0]
        this.fetchKeyword()
        this.fetchHistory()
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
        onClickTab(tab) {
            this.selectedTab = tab
        },
        onClickKeyword(keyword) {
            this.query = keyword//선택된 키워드를 입력값으로 바인딩함(입력값이 query에 저장됨)
            this.search()//검색 결과 페이지로 이동
        },
        fetchKeyword() { // data 를 가져와 
            KeywordModel.list().then(data => {
                this.keywords = data
            })
        },
        fetchHistory() {
            HistoryModel.list().then(data => {
                this.history = data
            })
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
