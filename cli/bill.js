import { Command } from 'commander'
import bill from './cli/bill.js'

const billController = new Command('bill')

billController
  .command('split <amount> <persons>')
  .description('splits the bill when people want to share the cost')
  .action((amount, persons) => {
    console.log (`each person owes ${amount && persons}`)
  })

export default billController
