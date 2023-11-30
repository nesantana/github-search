'use client'

import { FaUserFriends } from 'react-icons/fa'
import { iUser } from '@/interfaces/iUser'
import { SubTitle, Text, Title } from '@/app/styled'

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
    followers,
    following,
  } = user

  return (
    <div className="position-sticky top-0 py-3">
      <img
        className="rounded-circle"
        src={avatar_url}
        alt={`Avatar do usuário ${login}`}
      />

      <Title className="mt-3">
        {name}
      </Title>
      <SubTitle>
        {login}
      </SubTitle>

      <Text className="mt-3">
        {bio}
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
