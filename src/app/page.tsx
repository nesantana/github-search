'use client'

import { FaSearch } from 'react-icons/fa'
import { useMemo, useState } from 'react'
import { isEmpty } from 'lodash'
import { useRouter } from 'next/navigation'
import { Form } from './styled'
import { useToast } from '@/hooks/useToast'

const Home = () => {
  const [term, setTerm] = useState<string>('')

  const router = useRouter()
  const { showError } = useToast()

  const pageToGo = useMemo(() => `/search/${term}/`, [term])

  const goToPage = () => {
    if (isEmpty(term)) {
      showError('Por favor, preencha o nome de usuário!')

      return
    }

    router.push(pageToGo)
  }

  const handleSearch = (e: any) => {
    if (e.key === 'Enter') {
      goToPage()
    }
  }

  return (
    <main>
      <div className="container text-center">
        <Form>
          <img src="/assets/logo.png" alt="Logo GitHub Search" />

          <div className="position-relative">
            <input
              type="text"
              placeholder="Pesquise o nome de usuário que deseja buscar..."
              value={term}
              onChange={({ target }) => setTerm(target.value)}
              onKeyDown={handleSearch}

            />

            <FaSearch onClick={goToPage} />
          </div>
        </Form>
      </div>
    </main>
  )
}

export default Home
