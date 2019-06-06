const router = require('express').Router();

const BlogsController = require('../controllers/blogsController');

//begin routes
//new and edit deliver a form (they can use the same partial view)
router.get('/', BlogsController.index);
router.get('/new', BlogsController.new);
//:id is a bound argument, gets passed as an argument to BlogsController.show
router.get('/:id', BlogsController.show);
router.get('/:id/edit', BlogsController.edit);
router.post('/', BlogsController.create);
router.post('/update', BlogsController.update);
router.post('/destroy', BlogsController.destroy);
//end routes

module.exports = router;