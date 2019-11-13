'use strict'

const Model = use('Model')

class Proyecto extends Model {

    user () {
        return this.belongsTo('App/Models/User')
    }

    tareas () {
        return this.hasMany('App/Models/Tarea')
    }

}

module.exports = Proyecto
