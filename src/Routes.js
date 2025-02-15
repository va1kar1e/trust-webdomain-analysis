const routes = require('next-routes')

module.exports = routes()
    .add({ name: 'index', pattern: '/', page: 'index' })
    .add({ name: 'rule', pattern: '/rule', page: 'rule' })
    .add({ name: 'domain', pattern: '/domain/:domain/:subdomain', page: 'domain' })
    .add({ name: 'testscore', pattern: '/testscore/:url', page: 'testscore' })
    .add({ name: 'filename', pattern: '/filename/:filename', page: 'filename' })
    // .add({ name: 'upload', pattern: '/upload/:filename', page: 'filename' })