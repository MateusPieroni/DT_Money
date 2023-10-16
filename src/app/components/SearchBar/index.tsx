import { Search } from 'lucide-react'
import * as Button from '../Button/index'
import { useForm } from 'react-hook-form'
import z from 'zod' // usado para validação dos formulários, usado para definição do schema do form (schema = formato do objeto de dados que vai receber quando realizar um submit no form)
import { zodResolver } from '@hookform/resolvers/zod'
import * as Input from '../Input/index'
import { TransactionsContext } from '@/app/contexts/TransactionContext'
import { useContextSelector } from 'use-context-selector'
import { twMerge } from 'tailwind-merge'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchBar() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }, // retorna verdadeiro ou falso, dizendo se o formulário está em processo de submitting
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSubmitTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <form
      className="mt-10 flex gap-4 lg:mt-28"
      onSubmit={handleSubmit(handleSubmitTransactions)}
    >
      <Input.Root>
        <Input.Trigger htmlFor="search">
          <Input.Control
            type="text"
            placeholder="Busque uma transação"
            id="search"
            {...register('query')}
          />
        </Input.Trigger>
      </Input.Root>

      <Button.Root
        type="submit"
        className={twMerge(
          'group flex cursor-pointer items-center gap-3 rounded-md border border-green-light p-4 text-base font-bold',
          'enabled:hover:bg-green-light disabled:cursor-not-allowed disabled:opacity-60',
          'md:px-8 md:py-14',
        )}
        disabled={isSubmitting} // quando o form estiver em submitting o botão ficará desabilitado
      >
        <Button.Icon>
          <Search className="h-5 w-5 text-green-light  group-hover:group-enabled:text-white" />
        </Button.Icon>
        <Button.Text className="hidden text-green-light group-hover:group-enabled:text-white md:block">
          Buscar
        </Button.Text>
      </Button.Root>
    </form>
  )
}
