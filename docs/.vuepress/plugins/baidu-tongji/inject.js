/* global HM_ID */

export default ({ router }) => {
  // Google analytics integration
  if (
    process.env.NODE_ENV === 'production' &&
    HM_ID &&
    typeof window !== 'undefined'
  ) {
    window._hmt = window._hmt || []
    ;(function() {
      var hm = document.createElement('script')
      hm.src = 'https://hm.baidu.com/hm.js?' + HM_ID
      var s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
    })()

    router.afterEach(function(to) {
      window._hmt.push(['_trackPageview', to.fullPath])
    })
  }
}
