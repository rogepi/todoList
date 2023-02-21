import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from "../hooks/auth"

const Dash = () => {
  const auth = useAuth()
  const { t } = useTranslation()
  return (
    <>
      <h1 className="text-4xl">{t('hi')}, {auth.username}</h1>
      <div className="mt-5 space-x-3">
        <Link to="/todo">
          <button className="w-32 bg-white text-black rounded p-1">{t('mytodo')}</button>
        </Link>
        <button onClick={() => auth.signout()} className="w-24 border rounded p-1">{t('signout')}</button>
      </div>
    </>
  )
}

export default Dash