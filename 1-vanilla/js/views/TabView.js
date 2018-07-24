import View from './View.js'

const tag = '[TabView]'

const TabView = Object.create(View)

TabView.setup = function(el) {
    this.init(el)
    this.bindClick()
    return this
}

TabView.setActiveTab = function(tabName) { //set Active Tab
    Array.from(this.el.children).forEach(li => {
        li.className = li.innerHTML === tabName ? 'active' : ''
    }) //All쓰면 전체 데이터
    this.show()
}

TabView.bindClick = function() {
    Array.from(this.el.children).forEach(li => {
        li.addEventListener('click', e => this.onClick(li.innerHTML))
    }) //tabName 넘겨줌
}

TabView.onClick = function(tabName) {
    this.setActiveTab(tabName)
    this.emit('@change', { tabName })
}

export default TabView
