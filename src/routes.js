const routes = require('next-routes')

module.exports = routes()
// .add({name: 'beta', pattern: '/v3', page: 'v3'})
.add('index', '/')
.add('dashboard', '/dashboard')
.add('score','/score')
.add('domain', '/domain')
.add('domain_name', '/domain/:domain/:subdomain')
.add('web', '/web')