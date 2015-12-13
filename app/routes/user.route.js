var userController = require('./../controllers/user.controller');
var roleController = require('./../controllers/role.controller');

// create route definitions
module.exports = function(router) {

 // route for sign in. This requires autheentication
 router.route('/users/login')
  .post(userController.login);

 // route for logout. This requires that a user is signIn
 router.route('/users/logout')
  .post(userController.logout);

 // route to create new user requires no authentication but viewing users does.
 router.route('/users')
  .post(userController.createUser)
  .get(userController.Auth, userController.getAllUsers);

 // routes to GET, UPDATE and DELETE users.
 // This requires authentication
 router.route('/users/:id')
  .get(userController.Auth, userController.getUser)
  .put(userController.Auth, userController.updateUser)
  .delete(userController.Auth, userController.deleteUser);
};
