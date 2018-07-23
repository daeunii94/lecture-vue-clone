import View from './View.js'

const tag = '[TabView]'

const TabView = Object.create(View)


TabView.setup = function(el) {
    this.init(el)
}

TabView.setActiveTab = function(tabName) { //set Active Tab
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
        li.className = li.innerHTML === tabName ? 'active' : ''
    }) //All쓰면 전체 데이터


}

export default TabView
