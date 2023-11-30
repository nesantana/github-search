'use client'

import { useState } from 'react'
import Link from 'next/link'
import InputSearch from '@/components/inputSearch'

interface iSearchBar {
  username: string
}

export const SearchBar = ({ username }: iSearchBar) => {
  const [term, setTerm] = useState<string>(username ?? '')

  return (
    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center my-3 gap-3">
      <Link href="/">
        <img src="/assets/logo.png" alt="Logo Github Search" />
      </Link>
      <InputSearch term={term} setTerm={setTerm} />
    </div>
  )
}
