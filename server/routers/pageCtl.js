var path = require('path')
var pageJsonConfig = require('../../app/app.json')

function pageRouteMap (router) {
  for (var variable in pageJsonConfig) {
    if (pageJsonConfig.hasOwnProperty(variable)) {
      router.get(variable,(function(variable){
        return function*(next) {
          var routePath = path.join(__dirname, '../../app', pageJsonConfig[variable])
          yield this.render('index', {
            template: routePath
          })
        }
      })(variable))
    }
  }
}

module.exports = pageRouteMap
