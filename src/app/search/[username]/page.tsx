import { iProps } from '@/interfaces/iProps'
import { SearchBar } from './components'

export const generateMetadata = ({ params }: iProps) => {
  const { username } = params

  return ({
    title: `${username} - GitHub Search`,
    description: `Você buscou por ${username}`,
  })
}

const Search = ({ params }: iProps) => {
  const { username } = params

  return (
    <main>
      <div className="container">
        <SearchBar username={username} />
      </div>
    </main>
  )
}

export default Search
