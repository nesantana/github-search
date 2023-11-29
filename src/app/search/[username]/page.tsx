import { iProps } from '@/interfaces/iProps'
import { SearchBar } from './components'
import { getUserByUsername } from '@/services/users'
import { Profile } from './components/Profile'
import { iUser } from '@/interfaces/iUser'

export const generateMetadata = ({ params }: iProps) => {
  const { username } = params

  return ({
    title: `${username} - GitHub Search`,
    description: `Você buscou por ${username}`,
  })
}

const Search = async ({ params }: iProps) => {
  const { username } = params

  const { data }: any = await getUserByUsername(username)

  const user: iUser = data

  return (
    <main>
      <div className="container">
        <SearchBar username={username} />
        <div className="col-3">
          <Profile user={user} />
        </div>
      </div>
    </main>
  )
}

export default Search
