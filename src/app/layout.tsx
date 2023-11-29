import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import StyledComponentsRegistry from '@/lib/registry'

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
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
