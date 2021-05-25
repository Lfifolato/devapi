import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class InitSeeder extends BaseSeeder {
  public async run() {
    await Cliente.create({
      nome: 'Luiz',
      email: 'luiz.fifolato@gmail.com',
      telefone: 'Telefone',
      cidade: 'Ribeirão',
      ddd: '016',
    })
  }
}
