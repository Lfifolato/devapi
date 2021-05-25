import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string({ trim: true }),
    email: schema.string({ trim: true }, [
      rules.unique({ table: 'clientes', column: 'email' }),
      rules.email(),
    ]),
    cidade: schema.string({ trim: true }),
    telefone: schema.string({ trim: true }),
    ddd: schema.string({ trim: true }),
  })

  public messages = {
    required: 'Esse campo e Obrigatório',
    unique: '{{field}} Ja Cadastrado',
    email: 'Email Invalido',
  }
}
