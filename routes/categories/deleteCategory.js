const { deleteCategory } = require('../../models/categories/categoriesAPI');
const passport = require('passport');
const isAdmin = require('../../middlewares/isAdmin');
const isValidObjectId = require('../../models/utils/isValidObjectId');

module.exports = router => {
  router
    .route('/:id')
    .delete(
      passport.authenticate('jwt-auth', { session: false }),
      isAdmin,
      (req, res) => {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
          return res.status(400).json({ message: 'Некорректный запрос' });
        }
        deleteCategory(id)
          .then(() =>
            res.json({
              message: 'Категория была успешно удалена',
            }),
          )
          .catch(() => {
            res.status(500).json({
              message: 'Запрос не может быть выполнен. Повторите попытку позже',
            });
          });
      },
    );
  return router;
};
