'use strict'

const Proyecto = use('App/Models/Proyecto')
const AutorizacionService = use('App/Services/AutorizacionService')

class ProyectoController {

    async index({ auth }){
        const user = await auth.getUser();
        // console.log(user);
        // console.log(user.id);
        return await user.proyectos().fetch();
    }

    async create({auth, request}){
        const user = await auth.getUser();
        const {nombre} = request.all();
        const proyecto = new Proyecto();
        // project.nombre = nombre;
        proyecto.fill({
            nombre
        });
        await user.proyectos().save(proyecto);
        return proyecto;
    }

    async destroy({ auth, response, params}){
        const user = await auth.getUser();
        const { id } = params;
        const proyecto = await Proyecto.find(id);
        AutorizacionService.verificarPermiso(proyecto, user);
        // if(proyecto.user_id !== user.id){
        //     return response.status(403).json({
        //         mensaje: "No puedes"
        //     })
        // }
        await proyecto.delete();
        return proyecto;
    }

    async update ({auth, params, request }){
        const user = await auth.getUser();
        const {id} = params;
        const proyecto = await Proyecto.find(id);
        AutorizacionService.verificarPermiso(proyecto, user);
        proyecto.merge(request.only('nombre'));
        await proyecto.save();
        return proyecto
    }

}

module.exports = ProyectoController
