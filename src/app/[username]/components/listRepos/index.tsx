'use client'

import styled from 'styled-components'
import { useEffect, useMemo, useState } from 'react'
import { FaExternalLinkAlt, FaEye, FaStar } from 'react-icons/fa'
import Link from 'next/link'
import { useToast } from '@/hooks/useToast'
import { getReposByUsername } from '@/services/users'
import { iRepo } from '@/interfaces/iRepos'
import { SubTitle } from '@/app/styled'
import { Skeleton } from '@/components/skeleton'

interface iListRepos {
  username: string
}

const CardListRepos = styled.div`
  padding: 30px;
  background: #f8f8f8;
  border-radius: 10px;
`

interface iOrder {
  id: number
  name: string
  voidSort(a: iRepo, b: iRepo): number
  reverse: boolean
}

const orders: iOrder[] = [
  {
    id: 0,
    name: 'Maior Estrelas',
    voidSort: (a, b) => b.stargazers_count - a.stargazers_count,
    reverse: false,
  },
  {
    id: 1,
    name: 'Menor Estrelas',
    voidSort: (a, b) => b.stargazers_count - a.stargazers_count,
    reverse: true,
  },
  {
    id: 2,
    name: 'Nome Alfabético',
    voidSort: (a, b) => a.name.localeCompare(b.name),
    reverse: false,
  },
  {
    id: 3,
    name: 'Nome Alfabético Invertido',
    voidSort: (a, b) => a.name.localeCompare(b.name),
    reverse: true,
  },
]

export const ListRepos = ({ username }: iListRepos) => {
  const [repos, setRepos] = useState<iRepo[]>([] as iRepo[])
  const [loading, setLoading] = useState(false)
  const [currentOrder, setCurrentOrder] = useState('0')

  const { showError } = useToast()

  const searchRepos = async () => {
    try {
      setLoading(true)

      const { data } : any = await getReposByUsername(username)
      setRepos(data)
    } catch (e) {
      showError('Opss, parece que algo deu errado enquanto buscávamos os repositórios.')
    } finally {
      setLoading(false)
    }
  }

  const listRepos = useMemo(() => {
    const findCurrentOrder = orders.find((order:iOrder) => order.id === Number(currentOrder))

    const result = repos.sort((a: iRepo, b: iRepo) => findCurrentOrder?.voidSort(a, b)!)

    if (findCurrentOrder?.reverse) {
      return result.reverse()
    }

    return result
  }, [repos, currentOrder])

  useEffect(() => {
    searchRepos()
  }, [username])

  return (
    <CardListRepos>
      <div className="d-flex justify-content-between align-items-center flex-column flex-lg-row">
        <div>
          Filtrando por Maior Estrelas
        </div>
        <select
          value={currentOrder}
          onChange={({ target }) => setCurrentOrder(target.value)}
        >
          {orders.map((order: iOrder) => (
            <option value={order.id} key={order.id}>{order.name}</option>
          ))}
        </select>
      </div>

      {loading && (
        <div className="mt-3">
          <Skeleton height={96} marginBottom={20} />
        </div>
      )}

      {(!!listRepos.length && !loading) && listRepos.map((repo: iRepo) => {
        const url = `/${repo.full_name}`
        return (
          <div className="py-3 border-bottom" key={repo.id}>
            <div className="d-flex justify-space-between text-center text-lg-start align-items-center flex-column flex-lg-row">
              <div className="col-9">
                <div>
                  <Link href={url} className="hover:text-decoration-underline">
                    <SubTitle>{repo.name}</SubTitle>
                  </Link>
                </div>
              </div>
              <div className="col-2">
                <div>
                  {repo.language}
                </div>
              </div>
              <div className="col-1 d-flex gap-1 align-items-center">
                <FaStar />
                {repo.stargazers_count}
              </div>
            </div>
            <div className="d-flex gap-1 align-items-center mt-2 justify-content-lg-start justify-content-center">
              <a href={repo.html_url} target="_blank" className="btn btn-dark btn-sm" rel="noreferrer">
                <FaExternalLinkAlt />
                {' '}
                ver no git
              </a>
              <Link href={url} className="btn btn-dark btn-sm">
                <FaEye />
                {' '}
                detalhes
              </Link>
            </div>
          </div>
        )
      })}
    </CardListRepos>
  )
}
