import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente'
import { StoreValidator, UpdateValidator } from 'App/Validators/Clientes/index'

export default class ClientesController {
  public async index({ response }: HttpContextContract) {
    const cliente = await Cliente.query().orderBy('id', 'asc')

    return response.status(200).send(cliente)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const cliente = await Cliente.create(data)

    return response.status(201).send(cliente)
  }

  public async show({ params, response }: HttpContextContract) {
    const cliente = await Cliente.find(params.id)

    if (!cliente) {
      return response.status(404).send({ erro: 'Cliente não encontrado' })
    }

    return response.status(200).send(cliente)
  }

  public async update({ request, response, params }: HttpContextContract) {
    const cliente = await Cliente.find(params.id)

    if (!cliente) {
      return response.status(404).send({ erro: 'Cliente não encontrado' })
    }

    const data = await request.validate(UpdateValidator)

    cliente.merge(data)

    await cliente.save()

    return response.status(201).send(cliente)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const cliente = await Cliente.find(params.id)

    if (!cliente) {
      return response.status(404).send({ erro: 'Cliente não encontrado' })
    }

    cliente.delete()

    return response.status(204).send({ messages: 'Cliente deletado' })
  }
}
