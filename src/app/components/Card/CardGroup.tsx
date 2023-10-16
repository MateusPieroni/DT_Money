import * as Card from './index'
import { ArrowUpCircle, ArrowDownCircle, DollarSign } from 'lucide-react'
import { priceFormatter } from '@/app/utils/formatter'
import { useSummary } from '@/app/hooks/useSummary'
import * as ScrollArea from '@radix-ui/react-scroll-area'

export function CardGroup() {
  const summary = useSummary()

  return (
    <>
      <ScrollArea.Root type="scroll" className="w-full">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <div className="flex w-full gap-3 lg:absolute lg:-top-20 lg:gap-card">
            <Card.Root className="flex flex-col gap-3 rounded-md bg-gray-4 px-8 py-6 lg:duration-200 lg:hover:scale-105">
              <Card.Title>
                <span className="text-base font-normal text-gray-6">
                  Entradas
                </span>
                <ArrowUpCircle className="h-8 w-8 text-green-light" />
              </Card.Title>

              <Card.Price>
                <span className="text-32 font-bold text-gray-7">
                  {priceFormatter.format(summary.income)}
                </span>
              </Card.Price>
            </Card.Root>

            <Card.Root className=" flex flex-col gap-3 rounded-md bg-gray-4 px-8 py-6 lg:duration-200 lg:hover:scale-105">
              <Card.Title>
                <span className="text-base font-normal text-gray-6">
                  Saídas
                </span>
                <ArrowDownCircle className="h-8 w-8 text-red-classic" />
              </Card.Title>

              <Card.Price>
                <span className="text-32 font-bold text-gray-7">
                  {priceFormatter.format(summary.outcome)}
                </span>
              </Card.Price>
            </Card.Root>

            <Card.Root className=" flex flex-col gap-3 rounded-md bg-green-dark px-8 py-6 lg:duration-200 lg:hover:scale-105">
              <Card.Title>
                <span className="text-base font-normal text-gray-6">Total</span>
                <DollarSign className="h-8 w-8 text-white" />
              </Card.Title>

              <Card.Price>
                <span className="text-32 font-bold text-gray-7">
                  {priceFormatter.format(summary.total)}
                </span>
              </Card.Price>
            </Card.Root>
          </div>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar orientation="horizontal">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </>
  )
}

/** <Card.Root className="flex flex-col gap-3 rounded-md bg-gray-4 px-8 py-6 duration-200 hover:scale-105">
        <Card.Title>
          <span className="text-base font-normal text-gray-6">Entradas</span>
          <ArrowUpCircle className="h-8 w-8 text-green-light" />
        </Card.Title>

        <Card.Price>
          <span className="text-32 font-bold text-gray-7">
            {priceFormatter.format(summary.income)}
          </span>
        </Card.Price>
      </Card.Root>

      <Card.Root className=" flex flex-col gap-3 rounded-md bg-gray-4 px-8 py-6 duration-200 hover:scale-105">
        <Card.Title>
          <span className="text-base font-normal text-gray-6">Saídas</span>
          <ArrowDownCircle className="h-8 w-8 text-red-classic" />
        </Card.Title>

        <Card.Price>
          <span className="text-32 font-bold text-gray-7">
            {priceFormatter.format(summary.outcome)}
          </span>
        </Card.Price>
      </Card.Root>

      <Card.Root className=" flex flex-col gap-3 rounded-md bg-green-dark px-8 py-6 duration-200 hover:scale-105">
        <Card.Title>
          <span className="text-base font-normal text-gray-6">Total</span>
          <DollarSign className="h-8 w-8 text-white" />
        </Card.Title>

        <Card.Price>
          <span className="text-32 font-bold text-gray-7">
            {priceFormatter.format(summary.total)}
          </span>
        </Card.Price>
      </Card.Root> */
