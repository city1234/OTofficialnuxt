import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\assets\\sass\\style.scss'


import _6f6c098b from '..\\layouts\\default.vue'

const layouts = { "_default": _6f6c098b }



export default {
  head: {"title":"传奇软件Tradition Software","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, user-scalable=no"},{"hid":"description","name":"全新代理模式,无限级代理","content":"传奇软件为合作伙伴提供更专业的一站式企业服务而不懈努力，传奇软件携手各大视讯平台，诚邀您与我们一路同行"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002FOTofficialnuxt\u002Ffavicon.ico"},{"rel":"stylesheet","href":"\u002FOTofficialnuxt\u002Fcss\u002Fbootstrap.min.css"},{"rel":"stylesheet","href":"\u002FOTofficialnuxt\u002Fcss\u002Ficomoon.css"},{"rel":"stylesheet","href":"\u002FOTofficialnuxt\u002Fcss\u002Fanimate.css"},{"rel":"stylesheet","href":"\u002FOTofficialnuxt\u002Fcss\u002Fslick.css"},{"rel":"stylesheet","href":"\u002FOTofficialnuxt\u002Fcss\u002Fcolorbox.css"}],"script":[{"src":"\u002FOTofficialnuxt\u002Fjs\u002Fjquery-2.1.0.min.js"},{"src":"\u002FOTofficialnuxt\u002Fjs\u002Fbootstrap.min.js"},{"src":"\u002FOTofficialnuxt\u002Fjs\u002Fjquery.nicescroll.min.js"},{"src":"\u002FOTofficialnuxt\u002Fjs\u002Fslick.min.js"},{"src":"\u002FOTofficialnuxt\u002Fjs\u002Fjquery.colorbox.js"},{"src":"\u002FOTofficialnuxt\u002Fjs\u002Fwow.min.js"},{"src":"\u002FOTofficialnuxt\u002Fjs\u002Fvue-carousel-3d.min.js"},{"src":"\u002FOTofficialnuxt\u002Fjs\u002Fscript.js"}],"style":[]},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
      
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
    
  },
  components: {
    NuxtLoading
  }
}
