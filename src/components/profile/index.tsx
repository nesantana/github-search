'use client'

import { FaUserFriends } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { iUser } from '@/interfaces/iUser'
import { SubTitle, Text, Title } from '@/app/styled'
import { useToast } from '@/hooks/useToast'
import { getEventsByUsername } from '@/services/users'

interface iProfile {
  user: iUser
}

export const Profile = ({
  user,
}: iProfile) => {
  const {
    avatar_url = '',
    login = '',
    name = '',
    bio = '',
    followers = '',
    following = '',
  } = user

  const { showError } = useToast()

  const [email, setEmail] = useState('Não encontramos o e-mail do usuário')

  const searchEvents = async () => {
    try {
      const { data }: any = await getEventsByUsername(login)

      if (data.length) {
        const eventsPush = data.filter((item: any) => item.type === 'PushEvent')

        if (
          eventsPush.length
          && eventsPush[0].payload.commits
          && eventsPush[0].payload.commits.length
        ) {
          const currentEmail = eventsPush[0].payload.commits[0].author.email ?? ''

          setEmail(currentEmail)
        }
      }
    } catch (e) {
      showError('Opss, não conseguimos aprensentar os eventos.')
    }
  }

  useEffect(() => {
    searchEvents()
  }, [login])

  return (
    <div className="position-sticky top-0 py-3">
      <img
        className="rounded-circle"
        src={avatar_url}
        alt={`Avatar do usuário ${login}`}
      />

      <Title className="mt-3">
        {name ?? 'Usuário sem nome'}
      </Title>
      <SubTitle>
        {login}
      </SubTitle>

      <Text className="mt-3">
        {email}
      </Text>

      <Text className="mt-3">
        {bio ?? 'Usuário sem Bio'}
      </Text>

      <div className="d-flex gap-2 mt-3 align-items-center">
        <div>
          <FaUserFriends />
        </div>
        <div>
          {followers}
          {' '}
          Seguidores
        </div>
        <div>
          |
        </div>
        <div>
          {following}
          {' '}
          Seguindo
        </div>
      </div>
    </div>
  )
}
