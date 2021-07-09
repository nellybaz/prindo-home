const path = require('path')
const { EMAIL, PASSWORD } = require('./vars')

module.exports = {
    env: {
        EMAIL:EMAIL,
        PASSWORD:PASSWORD
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
}
