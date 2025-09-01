'use client'

import dynamic from 'next/dynamic'
import 'react-toastify/dist/ReactToastify.css'

const ToastContainer = dynamic(
  () => import('react-toastify').then((mod) => ({ default: mod.ToastContainer })),
  { ssr: false }
)

export default function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  )
}
n