'use client'

import { ReactNode, useEffect, useState, useCallback } from 'react' // useCallback vai evitar que alguma função seja recriada se nenhuma informação que aquela função dependa tenha mudado
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'

interface TransactionsProps {
  id: string
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: TransactionsProps[]
  fetchTransactions: (query?: string) => Promise<void>
  // errorMessage: string
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])
  // const [errorMessage, setErrorMessage] = useState('')

  const fetchTransactions = useCallback(async (query?: string) => {
    // o ponto de ? é para selecionar que é opcional, pois a primeira vez que a função for chamada ela não vai receber um query
    try {
      const response = await api.get('/transactions', {
        params: {
          _sort: 'createdAt', // para ordenar de acordo com a data de criação
          _order: 'desc', // de forma decrescente
          q: query,
        },
      }) // "Pega no /transactions as coisas que possuem o valor (q) que tem o valor de query"
      if (response.data.length === 0) {
        console.log('error')
        // setErrorMessage('true')
      } else {
        setTransactions(response.data)
        // setErrorMessage('false')
      }
    } catch (error) {
      console.log('Ocorreu algum erro', error)
    }
  }, [])

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, category, price, type } = data

      const response = await api.post('transactions', {
        description,
        category,
        price,
        type,
        createdAt: new Date(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        // errorMessage,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

/*  async function fetchTransactions(query?: string) {
    // o ponto de ? é para selecionar que é opcional, pois a primeira vez que a função for chamada ela não vai receber um query
    const url = new URL('/transactions')

    if (query) {
      // se for enviado um query vai adicionar 'q' na url => http://localhost:3333/transactions?q=valorDaQuery . Isso tem que ser feito com base na documentação do json.server
      url.searchParams.append('q', query)
    }
    const response = await fetch(url) // fetch foi utilizado para acessar a API
    const data = await response.json() // aqui é para transformar em json
    setTransactions(data)
  } */
