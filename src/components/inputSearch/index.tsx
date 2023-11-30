'use client'

import { isEmpty } from 'lodash'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import { useToast } from '@/hooks/useToast'
import theme from '@/theme'

interface iInputSearch {
  term: string
  setTerm(item: string): void
}

const InputStyled = styled.div`
    input {
    width: 550px;
    max-width: 100%;
    height: 50px;
    padding: 0 20px;
    border-radius: 30px;
    outline: none;
    border: 1px solid ${theme.secondaryColor};
  }

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0px, -50%);
    cursor: pointer;
  }
`

const InputSearch = ({ term, setTerm }: iInputSearch) => {
  const a = 'a'
  const router = useRouter()
  const { showError } = useToast()

  const pageToGo = useMemo(() => `/${term}/`, [term])

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
    <InputStyled className="position-relative">
      <input
        type="text"
        placeholder="Pesquise o nome de usuário que deseja buscar..."
        value={term}
        onChange={({ target }) => setTerm(target.value)}
        onKeyDown={handleSearch}
      />

      <FaSearch onClick={goToPage} />
    </InputStyled>
  )
}

export default InputSearch
