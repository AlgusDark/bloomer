const express = require('express')
const path = require('path')
const exec = require('child_process').exec
const watch = require('node-watch')
const app = express()

const port = 3000

const srcPath = __dirname.split('/example')[0] + '/src'

const hotBuild = function() {
  exec('npm run build', function(err, stdout, stderr) {
    if (err) throw err
    if (stdout) {
      console.log(`npm run build --- ${stdout}`)
    }
    if (stderr) {
      console.log(`npm run build --- ${stderr}`)
    }
  })
}

watch(srcPath, { recursive: true }, function(evt, filename) {
  console.log(`${filename} file has changed`)
  hotBuild()
})

hotBuild()

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use('/', express.static(__dirname))
app.use('/dist', express.static(__dirname.split('/example')[0] + '/dist'))
app.use(
  '/node_modules',
  express.static(__dirname.split('/example')[0] + '/node_modules')
)

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info(
      `🌎 Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`
    )
  }
})
