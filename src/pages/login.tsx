import { useRef } from "react"
import { useHistory } from 'react-router-dom'
import { useAuth } from "../hooks/auth"
import { useTranslation } from 'react-i18next'

const Login = () => {
  const auth = useAuth()
  const history = useHistory()

  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const { t, i18n } = useTranslation()

  const switchLang = () => {
    const locale = i18n.language === 'zh-CN' ? 'en-US' : 'zh-CN'
    i18n.changeLanguage(locale)
  }

  const SubmitHandler = () => {
    const username = usernameRef.current?.value
    const password = passwordRef.current?.value
    if (username && password) {

      history.push('/dash')
      auth.signin(username)

    } else {
      alert('some params are null')
    }
  }

  return (
    <div className="p-5 w-[350px] bg-white text-black flex flex-col gap-3 rounded ">
      <h1 className="mx-auto text-xl">{t('welcome')}</h1>

      <label className="flex justify-between items-center">
        {t('username')}
        <input ref={usernameRef} className="border ml-3 p-1 rounded" placeholder="user" type="text" />
      </label>
      <label className="flex justify-between items-center">
        {t('password')}
        <input ref={passwordRef} className="border ml-3 p-1 rounded" placeholder="123456" type="password" />
      </label>
      <div className="flex justify-around">
        <button onClick={() => SubmitHandler()} className="w-20 bg-black text-white hover:bg-slate-700 p-1 rounded"> {t('signin')}</button>
        <button onClick={() => switchLang()} className="w-20 bg-gray-100 rounded p-1 hover:bg-slate-200">En/汉</button>
      </div>

    </div>
  )
}

export default Login