'use client'

import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaCaretLeft, FaExternalLinkAlt, FaStar } from 'react-icons/fa'
import { iRepo } from '@/interfaces/iRepos'
import { useToast } from '@/hooks/useToast'
import { getRepoByFullname } from '@/services/repos'
import { Text } from '@/app/styled'
import { Skeleton } from '@/components/skeleton'

interface iDescription {
  username: string
  project: string
}

const CardDescription = styled.div`
  padding: 30px;
  background: #f8f8f8;
  border-radius: 10px;
`

export const Description = ({ username, project }: iDescription) => {
  const [repo, setRepo] = useState<iRepo>({} as iRepo)
  const [loading, setLoading] = useState(false)

  const { showError } = useToast()

  const searchRepo = async () => {
    try {
      setLoading(true)

      const { data }: any = await getRepoByFullname(`${username}/${project}`)

      setRepo(data)
    } catch (_) {
      showError('Opss, algo deu errado enquanto buscávamos este repositório.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    searchRepo()
  }, [project])

  if (loading) {
    return (
      <>
        <div className="d-flex justify-content-between mb-3">
          <a href={`/${username}`} className="btn btn-dark btn-sm" rel="noreferrer">
            <FaCaretLeft />
            {' '}
            voltar
          </a>
          <a href={repo.html_url} target="_blank" className="btn btn-dark btn-sm" rel="noreferrer">
            <FaExternalLinkAlt />
            {' '}
            ver no git
          </a>
        </div>
        <Skeleton count={1} height={148} />
      </>
    )
  }

  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <a href={`/${username}`} className="btn btn-dark btn-sm" rel="noreferrer">
          <FaCaretLeft />
          {' '}
          voltar
        </a>
        <a href={repo.html_url} target="_blank" className="btn btn-dark btn-sm" rel="noreferrer">
          <FaExternalLinkAlt />
          {' '}
          ver no git
        </a>
      </div>
      <CardDescription>
        <div className="d-flex justify-content-between mb-3">
          <div>
            {repo.name}
          </div>
          <div>
            {repo.language ?? '-'}
          </div>
          <div className="d-flex align-items-center gap-1">
            <FaStar />
            {repo.stargazers_count}
          </div>
        </div>
        <Text>
          <strong>
            Descrição:
          </strong>
          <br />
          {repo.description ?? '-'}
        </Text>
      </CardDescription>
    </>
  )
}
