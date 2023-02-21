import { Trans, useTranslation } from 'react-i18next'
import LoginForm from "../components/login-form"

const Login = () => {

  const { t } = useTranslation()

  return (
    <div className="p-5 w-[350px] bg-white text-black flex flex-col gap-3 rounded ">
      <h1 className="mx-auto text-xl">{t('login.welcome')}</h1>

      <LoginForm />

      <div className="text-center">
        <Trans i18nKey="login.link"
        > <a style={{ color: "blue" }} href="https://github.com/rogepi/todoList" target="_blank">here</a>
        </Trans>
      </div>
    </div >
  )
}

export default Login