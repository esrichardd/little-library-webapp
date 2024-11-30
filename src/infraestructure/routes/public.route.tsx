import { useAuth } from '@/application/contexts/auth.context'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const PublicRoute: React.FC = () => {
  const { isAuthenticated } = useAuth()
  if (isAuthenticated) {
    return <Navigate to="/catalog" />
  }

  return <Outlet />
}
