import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup'
import { signin } from '../store/auth';

const LoginForm = () => {
  const dispath = useDispatch()
  const history = useHistory()
  const { t } = useTranslation()

  return (
    <div>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={
          Yup.object({
            username: Yup.string().
              matches(/^[a-zA-Z0-9_]*$/, 'nameincorrect')
              .min(10, 'nameincorrect')
              .required('namerequest'),
            password: Yup.string().
              min(10, 'pwdrequest')
              .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])[a-zA-Z\d!@#\$%\^&\*]{10,}$/,
                'pwdincorrect')
          })
        }
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            dispath(signin(values.username))
            history.push('/dash')
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <label className="flex justify-between item-start">
              {t('login.username')}
              <div className='flex flex-col items-start'>
                <input
                  type="username"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  className="border p-1 rounded"
                />
                <span className='text-xs text-red-400'>
                  {errors.username && touched.username && errors.username ?
                    t(`login.error.${errors.username && touched.username && errors.username}`)
                    : ''}
                </span>
              </div>
            </label>

            <label className="flex justify-between items-start">
              {t('login.password')}
              <div className='flex flex-col items-start'>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="border p-1 rounded"
                />
                <div className='text-xs text-red-400'>
                  {errors.password && touched.password && errors.password ?
                    t(`login.error.${errors.password && touched.password && errors.password}`)
                    : ''}
                </div>
              </div>
            </label>
            <button type="submit" disabled={isSubmitting}
              className="w-full mt-3 bg-black text-white hover:bg-zinc-700 p-1 rounded">
              {t('login.signin')}
              {isSubmitting ? '...' : ''}
            </button>
          </form>
        )}
      </Formik>
    </div >
  )
}

export default LoginForm