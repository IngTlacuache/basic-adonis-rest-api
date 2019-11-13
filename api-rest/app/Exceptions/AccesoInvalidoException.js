'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class AccesoInvalidoException extends LogicalException {
  handle (error, {response}) {
    return response.status(403).json({
      error: 'Acceso no permitido al recurso'
    })
  }
}

module.exports = AccesoInvalidoException
