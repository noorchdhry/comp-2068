const router = require('express').Router()

//create our routes
/*router.get('/', (req, res) => {
    res.send(`Hey there world!`);
});
  
router.get('/about', (req, res) => {
    res.send(`I like to play games`);
});
*/

//our controllers
const PagesController = require('../controllers/pagesController')

//create our route
router.get('/', PagesController.show)
router.get('/about', PagesController.show)
router.get('/contact', PagesController.show)

module.exports = router
