const tag = '[View]'

export default {
  init(el) { //element 
    if (!el) throw el
    this.el = el
    return this
  },

  on(event, handler) { //
    this.el.addEventListener(event, handler)
    return this
  },

  emit(event, data) { //스스로 어떤 이벤트 방출함
    const evt = new CustomEvent(event, { detail: data }) //(이벤트이름,디테일키)
    this.el.dispatchEvent(evt)
    return this
  },

  hide() { 
    this.el.style.display = 'none'
    return this
  },

  show() {
    this.el.style.display = '' //show로 바꿈
    return this
  }
}