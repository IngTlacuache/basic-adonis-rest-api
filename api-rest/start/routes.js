'use strict'
// const Database = use('Database')
const Route = use('Route')

// 
// Route.get('/', async () => {
//   return await Database.table('users').select('*')
// })

Route.group(() => {
  Route.post('usuarios/registro', 'UserController.store');
  Route.post('usuarios/login', 'UserController.login');
  // Rutas de los proyectos
  Route.get('proyectos', 'ProyectoController.index').middleware('auth');
  Route.post('proyectos', 'ProyectoController.create').middleware('auth');
  Route.patch('proyectos/:id', 'ProyectoController.update').middleware('auth');
  Route.delete('proyectos/:id', 'ProyectoController.destroy').middleware('auth');
  // Rutas de los proyectos
  Route.get('proyectos/:id/tareas', 'TareaController.index').middleware('auth');
  Route.post('proyectos/:id/tareas', 'TareaController.create').middleware('auth');
  Route.patch('tareas/:id', 'TareaController.update').middleware('auth');
  Route.delete('tareas/:id', 'TareaController.destroy').middleware('auth');

}).prefix('api/v1/');
