require.config({
    baseUrl: './js/',
    paths: {
        'jquery': 'libs/jquery',
        'index': 'app/index'
    }
})
require(['index'])