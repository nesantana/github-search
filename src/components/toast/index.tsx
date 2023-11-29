/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { toast, TypeOptions } from 'react-toastify'

export interface iToast {
  type: TypeOptions,
  message: string
}

export const Toast = ({ type, message } : iToast) => (
  toast(
    <div style={{ display: 'flex' }}>
      <div style={{ flexGrow: 1, fontSize: 15, padding: '8px 12px' }}>
        {message}
      </div>
    </div>,
    {
      type,
    },
  )
)
