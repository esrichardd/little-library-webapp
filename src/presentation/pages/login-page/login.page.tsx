import { useLoginLogic } from './hooks/use-login-logic'
import { LoginContent } from './components'

export const LoginPage: React.FC = () => {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    loading,
  } = useLoginLogic()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <LoginContent
        email={email}
        password={password}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  )
}
