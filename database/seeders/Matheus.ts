import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class MatheusSeeder extends BaseSeeder {
  public async run() {
    await Cliente.createMany([
      {
        nome: 'Matheus',
        email: 'mathes@gmail.com.br',
        ddd: '011',
        telefone: '989898989',
        cidade: 'Sp',
      },
      {
        nome: 'Pedro',
        email: 'Pedro@gmail.com.br',
        ddd: '017',
        telefone: '5454545456',
        cidade: 'SUL',
      },
    ])
  }
}
