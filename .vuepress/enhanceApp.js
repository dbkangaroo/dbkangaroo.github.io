// import Ads from 'vue-google-adsense'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    // ...apply enhancements to the app
    /* 
    Vue.use(Ads.Adsense)
    Vue.use(Ads.InArticleAdsense)
    Vue.use(Ads.InFeedAdsense) 
    */
    Vue.use(require('vue-script2'))
}