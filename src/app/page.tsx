'use client'

import { CardGroup } from './components/Card/CardGroup'
import { SearchBar } from './components/SearchBar'
import { TransactionList } from './components/Transaction/TransactionList'

export default function Home() {
  return (
    <>
      <CardGroup />

      <SearchBar />

      <TransactionList />
    </>
  )
}
