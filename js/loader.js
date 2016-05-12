/**
 * @author slowsay
 */
require.config({
    secondWaits : 50,
    baseUrl : 'js/',
    paths : {
        react : 'lib/react.min',
        reactdom : 'lib/react-dom.min',
        browser : 'lib/browser.min',
        css:'lib/css',
        main : 'main'
    },
    shim : {
        main : ['react', 'reactdom', 'browser','css!../css/main.css']
    }
});
require(['main'], function(a) {
    //todo
});
