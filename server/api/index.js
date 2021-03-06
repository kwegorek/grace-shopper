const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/cereals', require('./items'))
router.use('/items', require('./items'))
router.use('/orders', require('./order'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
