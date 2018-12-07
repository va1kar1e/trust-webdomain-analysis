const express = require('express')
const next = require('next')
const getCSV = require('get-csv');

const dev = process.env.NODE_ENV !== 'production'
const app = next({
    dev,
    dir: './src'
})
const routes = require('./src/routes')
const handle = routes.getRequestHandler(app)

app.prepare()
    .then(() => {
        const server = express()
        server.use(express.static('public'))
        
        server.get('/api/score/:domain/:subdomain', (req, res) => {
            var results = []
            getCSV(`data/${req.params.domain}/${req.params.subdomain}.txt`, { headers: false }).then(rows =>
                res.send(rows)
            );

            // var list_cert_have = [{name: 'Yes', value: 400}, {name: 'No', value: 300}];
            // var list_cert_valid = [
            //     {name: 'Valid', number: 40},
            //     {name: 'Invalid', number: 90},
            //     {name: 'Other', number: 90},
            // ];
            // var list_web = [
            //     {url: "www.tu.ac.th", certhave:"Yes", certvalid:"Yes", status:"Active",expired:"82"},
            //     {url: "www.ku.ac.th", certhave:"Yes", certvalid:"No", status:"Inactive",expired:"32"},

            // ]
            // res.json({
            //     grade:"C+",
            //     certhave:list_cert_have,
            //     certvalid: list_cert_valid,
            //     protocol: list_protocol,
            //     webscore: list_web
            // });
        });
        
        server.get('/dashboard', (req, res) => {
            app.render(req, res, '/dashboard', req.params)
        })

        server.get('/score', (req, res) => {
            app.render(req, res, '/score', req.params)
        })
        
        server.get('/domain', (req, res) => {
            app.render(req, res, '/domain', req.params)
        })

        server.get('/domain/:domain/:subdomain', (req, res) => {
          const actualPage = '/resultDomain'
          const queryParams = {
              domain: req.params.domain,
              subdomain: req.params.subdomain
          }
          app.render(req, res, actualPage, queryParams)
        })
        
        server.get('/web', (req, res) => {
          app.render(req, res, '/web', req.params)
        })

        server.use(handle).listen(9000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:9000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })