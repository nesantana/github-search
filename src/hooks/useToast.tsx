import { iToast, Toast } from '../components/toast'

export const useToast = () => {
  const showToast = (props : iToast) => Toast(props)

  const showError = (message: string = 'Opss, algo deu errado') => showToast({ type: 'error', message })
  const showInfo = (message: string) => showToast({ type: 'info', message })
  const showSuccess = (message: string) => showToast({ type: 'success', message })
  const showWarning = (message: string) => showToast({ type: 'warning', message })

  return {
    showToast,
    showError,
    showInfo,
    showSuccess,
    showWarning,
  }
}
