/* Importando */
const swagger = require('swagger-ui-express')
const Kudo = require('../model/kudo');
    const Status = require('http-status');



/* Methodo get id */
  exports.getId = (request, response, next) => {
      const id = request.params.id
      Kudo.findByPk(id).then((kudo) => {
      
        if (kudo) {
            response.send(kudo)
        } else {
            response.status(Status.NOT_FOUND).send()
        }
    }).catch((error) => next(error))


  }


  exports.getAll = (request, response, next) => {
      let limite = parseInt(request.query.limite || 0)
      let pagina = parseInt(request.query.pagina || 0)

      if (!Number.isInteger(limite) || !Number.isInteger(pagina)) {
          response.status(Status.BAD_REQUEST).send()
      }

      const ITENS_POR_PAGINA = 10

      limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite
      pagina = pagina <= 0 ? 0 : pagina * limite

      Kudo.findAll({ limit: limite, offset: pagina }).then((kudo) => {
          if (kudo && kudo.length) {
              response.send(kudo)
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }

  exports.create = (request, response, next) => {
      const title = request.body.title
      const sender = request.body.sender
      const description = request.body.description
      const icon = request.body.icon


      Kudo.create({
          title: title,
          sender: sender,
          description: description,
          icon: icon
      }).then(() => {
          response.status(Status.CREATED).send("Kudo enviado com Sucesso !")
      }).catch((error) => next(error))
  }

  exports.update = (request, response, next) => {
      const id = request.params.id

      const title = request.body.title
      const sender = request.body.sender
      const description = request.body.description

      Kudo.findByPk(id).then((kudo) => {
          if (kudo) {
              Kudo.update({
                  title: title,
                  sender: sender,
                  description: description
              }, { where: { id: id } }).then(() => {
                  response.send("Kudo atualizado com Sucesso !")
              }).catch((error) => next(error))
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }

  exports.delete = (request, response, next) => {
      const id = request.params.id

      Kudo.findByPk(id).then((kudo) => {
          if (kudo) {
              Kudo.destroy({
                  where: { id: id }
              }).then(() => {
                  response.send("Kudo deletado com sucesso !")
              }).catch((error) => next(error))
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }