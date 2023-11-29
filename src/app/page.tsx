'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Form } from './styled'
import InputSearch from '@/components/inputSearch'

const Home = () => {
  const [term, setTerm] = useState<string>('')

  return (
    <main>
      <div className="container text-center">
        <Form>
          <Link href="/">
            <img src="/assets/logo.png" alt="Logo GitHub Search" />
          </Link>

          <InputSearch term={term} setTerm={setTerm} />
        </Form>
      </div>
    </main>
  )
}

export default Home
