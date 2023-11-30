import { iProps } from '@/interfaces/iProps'
import { SearchBar } from '@/components/searchBar'
import { getUserByUsername } from '@/services/users'
import { Profile } from '@/components/profile'
import { iUser } from '@/interfaces/iUser'
import { Description } from './components'

export const generateMetadata = ({ params }: iProps) => {
  const { username, project } = params

  return ({
    title: `${username}/${project} - GitHub Search`,
    description: `Você buscou por ${username}`,
  })
}

const Search = async ({ params }: iProps) => {
  const { username, project } = params

  const { data }: any = await getUserByUsername(username)

  const user: iUser = data

  return (
    <main>
      <div className="container">
        <SearchBar username={username} />
        <div className="d-flex flex-column-reverse flex-lg-row gap-5">
          <div className="col-lg-3">
            <Profile user={user} />
          </div>
          <div className="col-lg-9">
            <Description username={username} project={project} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Search
