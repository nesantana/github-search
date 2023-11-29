'use client'

import { FaSearch } from 'react-icons/fa'
import { Form } from './styled'

const Home = () => (
  <main>
    <div className="container text-center">
      <Form>
        <img src="/assets/logo.png" alt="Logo GitHub Search" />

        <div className="position-relative">
          <input type="text" placeholder="Pesquise o nome de usuário que deseja buscar..." />

          <FaSearch />
        </div>
      </Form>
    </div>
  </main>
)

export default Home
