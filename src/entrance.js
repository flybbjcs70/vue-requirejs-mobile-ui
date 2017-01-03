require.config({
    //urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: "./",
    paths: {
        'libs': "libs",
        'vue': 'libs/vue/vue',
        'vuex': 'libs/vuex/vuex',
        'vue-router': 'libs/vue-router/vue-router',
        'jquery': "libs/jquery/jquery",
        'fastclick': "libs/fastclick/lib/fastclick",
        '__module__': 'common/__module__',
        '__component__': 'common/__component__',
        'detector': 'common/detector',
        'calc': 'common/calculate',
        'emitter': 'common/mixins/emitter',
        'shim': 'common/shim',
        'install': 'components/install'

    },
    map: {
        '*': {
            'text': 'libs/require-text/text'
        }
    },
    deps: [
        'shim',
        'jquery',
        'vue',
        'vue-router',
        'detector',
        'calc',
        'fastclick',
        'libs/require-text/text'
    ]
});
require(['fastclick', 'application'], function(FastClick, application) {
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = (function recalc() {
            var clientWidth = docEl.clientWidth > 750 ? 750 : docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 12 * clientWidth / 320 + 'px';
            return recalc;
        })();
    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);

    /*消除移动端click事件的延时*/
    new FastClick(document.body);

    /*应用程序 初始加载*/
    application.run();
});