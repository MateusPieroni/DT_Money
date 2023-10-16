'use client'

import { IgniteLogo } from '@/app/assets/IgniteLogo'
import * as Dialog from '@radix-ui/react-dialog'
import * as Input from '../Input'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { ArrowDownCircle, ArrowUpCircle, X } from 'lucide-react'
import * as Button from '../Button/index'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { TransactionsContext } from '@/app/contexts/TransactionContext'
import { useContextSelector } from 'use-context-selector'
import { twMerge } from 'tailwind-merge'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']), // enum é do zod e usa quando um valor pode ser algumas opções
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function Header() {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      // ta sendo usado para observar quais informações do contexto quero observar para saber se elas mudaram
      return context.createTransaction
    },
  )

  const {
    control, // usado para mandar informações para o form que nem no RadioGroup
    register,
    handleSubmit,
    formState: { isSubmitting }, // formState traz informações sobre o contexto do form
    reset,
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleCreateNewTransaction(data: newTransactionFormInputs) {
    const { description, category, price, type } = data

    createTransaction({
      description,
      category,
      price,
      type,
    })

    reset()
  }

  return (
    <div className="left-0 right-0 top-0 bg-gray-1 px-6 py-[56px] pb-20 lg:px-40 lg:pb-32 lg:pt-10">
      <div className="flex justify-between">
        <IgniteLogo />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button.Root
              type="button"
              className="rounded-md bg-green-classic px-4 py-2 hover:bg-green-light lg:px-5 lg:py-3"
            >
              <Button.Text className="font-bold text-white">
                Nova Transação
              </Button.Text>
            </Button.Root>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-blackA9 data-[state=open]:animate-overlayShow" />

            <Dialog.Content
              className={twMerge(
                'fixed bottom-1/3 left-2/4 w-full max-w-[423px] -translate-x-2/4 translate-y-80 rounded-md bg-gray-2 p-6 focus:outline-none data-[state=open]:animate-mobileContentShow',
                'lg:bottom-auto lg:left-2/4  lg:top-2/4 lg:max-h-[85vh] lg:max-w-lg lg:-translate-x-2/4 lg:-translate-y-2/4 lg:p-8 lg:data-[state=open]:animate-contentShow',
              )}
            >
              <Dialog.Title className="m-0 text-lg font-normal text-white">
                Nova transação
              </Dialog.Title>
              <form
                onSubmit={handleSubmit(handleCreateNewTransaction)}
                className="mt-6"
              >
                <div className="flex flex-col gap-4">
                  <Input.Root>
                    <Input.Trigger htmlFor="description">
                      <Input.Control
                        type="text"
                        placeholder="Descrição"
                        id="description"
                        {...register('description')}
                      />
                    </Input.Trigger>
                  </Input.Root>

                  <Input.Root>
                    <Input.Trigger htmlFor="price">
                      <Input.Control
                        type="text"
                        placeholder="Preço"
                        id="price"
                        {...register('price', { valueAsNumber: true })} // isso é para transformar o valor do input em número
                      />
                    </Input.Trigger>
                  </Input.Root>

                  <Input.Root>
                    <Input.Trigger htmlFor="category">
                      <Input.Control
                        type="text"
                        placeholder="Categoria"
                        id="category"
                        {...register('category')}
                      />
                    </Input.Trigger>
                  </Input.Root>
                </div>

                <Controller
                  control={control}
                  name="type" // coloca a informação que eu quero inserir
                  render={({ field }) => {
                    // field foi usado para mudar seu valor conforme o valor do root muda console.log(field) [para entender melhor]

                    return (
                      <div>
                        <RadioGroup.Root
                          aria-label="Tipo de transação"
                          className="flex justify-between"
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <RadioGroup.Item
                            value="income"
                            className="group mt-6 flex items-center gap-2 rounded-md bg-gray-3 px-12 py-4 data-[state=checked]:bg-green-light lg:px-in"
                          >
                            <ArrowUpCircle className="h-6 w-6 text-green-light group-data-[state=checked]:text-white" />
                            <label htmlFor="in" className="text-white">
                              Entrada
                            </label>
                          </RadioGroup.Item>

                          <RadioGroup.Item
                            value="outcome"
                            className="group mt-6 flex items-center gap-2 rounded-md bg-gray-3 px-mobileOut py-4 data-[state=checked]:bg-red-classic lg:px-out "
                          >
                            <ArrowDownCircle className="h-6 w-6 text-red-classic group-data-[state=checked]:text-white" />
                            <label htmlFor="out" className="text-white">
                              Saída
                            </label>
                          </RadioGroup.Item>
                        </RadioGroup.Root>
                      </div>
                    )
                  }}
                />

                <Button.Root
                  type="submit"
                  className="mt-8 w-full rounded-md bg-green-classic px-8 py-4 enabled:hover:bg-green-light disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={isSubmitting}
                >
                  <Button.Text className="text-base font-normal text-white">
                    Cadastrar
                  </Button.Text>
                </Button.Root>
              </form>
              <Dialog.Close asChild>
                <button>
                  <X className="absolute right-10px top-4 h-8 w-8 text-gray-5" />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  )
}
