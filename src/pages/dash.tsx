import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../store/auth'
import { RootState } from '../store'
import { useGetPostByIdQuery } from '../store/post-api'
import Post from '../components/post'

const Dash = () => {
  const { t } = useTranslation()
  const username = useSelector((state: RootState) => state.auth.username)
  const dispath = useDispatch()
  const { data, error, isLoading } = useGetPostByIdQuery(1)
  return (
    <>
      <h1 className="text-4xl">{t('dash.hi')}, {username}</h1>
      <div className="mt-5 space-x-3">
        <Link to="/todo">
          <button className="w-32 bg-white text-black rounded p-1">{t('dash.mytodo')}</button>
        </Link>
        <button onClick={() => dispath(signout())} className="w-24 border rounded p-1">{t('dash.signout')}</button>
      </div>
      <div className='mt-10'>
        <Post />
      </div>
    </>
  )
}

export default Dash