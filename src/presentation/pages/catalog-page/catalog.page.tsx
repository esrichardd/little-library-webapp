import { Navbar } from '@/presentation/components/molecules/navbar'
import { useCatalogLogic } from './hooks/use-catalog-logic'
import { CatalogContent } from './components'

export const CatalogPage: React.FC = () => {
  const { books, isLoading } = useCatalogLogic()

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <CatalogContent books={books} isLoading={isLoading} />
      </main>
    </div>
  )
}
