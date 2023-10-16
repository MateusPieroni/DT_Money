import { priceFormatter, dateFormatter } from '@/app/utils/formatter'
import * as Transaction from './index'
import { TransactionsContext } from '@/app/contexts/TransactionContext'
import { useContextSelector } from 'use-context-selector'

export function TransactionList() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div className="mt-6 flex flex-col gap-2">
      {transactions.map((transaction) => {
        const typeClass =
          transaction.type === 'income'
            ? 'text-green-light'
            : 'text-red-classic'

        return (
          <Transaction.Root key={transaction.id}>
            <Transaction.Content className="text-base font-normal text-gray-6 lg:w-125">
              {transaction.description}
            </Transaction.Content>
            <Transaction.Content
              className={`${typeClass} text-base font-normal lg:w-50`}
            >
              {transaction.type === 'outcome' && '- '}
              {priceFormatter.format(transaction.price)}
            </Transaction.Content>
            <div className="flex justify-between">
              <Transaction.Content className="text-base font-normal text-gray-6 lg:w-60">
                {transaction.category}
              </Transaction.Content>
              <Transaction.Content className="text-base font-normal text-gray-6 lg:w-23">
                {dateFormatter.format(new Date(transaction.createdAt))}
              </Transaction.Content>
            </div>
          </Transaction.Root>
        )
      })}
    </div>
  )
}
