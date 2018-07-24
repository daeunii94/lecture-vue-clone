import SearchModel from './models/SearchModel.js'

new Vue({
    el: '#app',
    data: {
        query : '', //입력 데이터 받아서 저장
        searchResult: []
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
                this.searchResult = data
            })
        },
        resetForm() {
            this.query = '' 
            //todo remove results ..
            debugger
        }
    }
})
