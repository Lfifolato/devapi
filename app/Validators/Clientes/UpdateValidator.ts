import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string.optional({ trim: true }),
    email: schema.string.optional({ trim: true }, [rules.email()]),
    cidade: schema.string.optional({ trim: true }),
    telefone: schema.string.optional({ trim: true }),
    ddd: schema.string.optional({ trim: true }),
  })

  public messages = {
    email: 'Email Invalido',
  }
}
