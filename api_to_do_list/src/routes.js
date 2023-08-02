const expres = require('express');
const router = expres.Router();

const toDoListController = require('./controller')


router.get('/', toDoListController.index);
router.post('/', toDoListController.store);
router.get('/:id', toDoListController.show);
router.put('/:id', toDoListController.update);
router.delete('/:id', toDoListController.delete);


module.exports = router