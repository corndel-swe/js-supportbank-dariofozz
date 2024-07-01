// cli/index.js
import { program } from 'commander'
import 

import transaction from './transaction.js'
import billController from './bill.js'

program.version('0.1.0').description('SupportBank')

program.addCommand(transaction)

program.addCommand(billController)

program.parse(process.argv)