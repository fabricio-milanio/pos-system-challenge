import Route from '@ioc:Adonis/Core/Route'

Route.resource('/signup', 'SignupController').apiOnly()

Route.post('/login', 'LoginController.login')

Route.group(() => {
  Route.get('/product', 'ProductsController.index')
  Route.get('/product/:id', 'ProductsController.show')
  Route.post('/product', 'ProductsController.store')
  Route.put('/product/:id', 'ProductsController.update')
  Route.delete('/product/:id', 'ProductsController.destroy')
}).middleware('auth')

Route.group(() => {
  Route.get('/client', 'ClientsController.index')
  Route.get('/client/:id', 'ClientsController.show')
  Route.post('/client', 'ClientsController.store')
}).middleware('auth')
