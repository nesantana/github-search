import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import StyledComponentsRegistry from '@/lib/registry'
import 'react-toastify/dist/ReactToastify.css'

export const metadata: Metadata = {
  title: 'GitHub Search',
  description: 'Busque aqui os perfis mais bacanas, e os melhores repositórios do Github!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          {children}
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnHover
          />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
