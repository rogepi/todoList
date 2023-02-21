import { useState } from "react"
import { useTranslation, Trans } from "react-i18next"
import { useGetPostByIdQuery } from "../store/post-api"

const Post = () => {
  const { t } = useTranslation()
  const [id, setId] = useState(1)
  const { data, error, isLoading } = useGetPostByIdQuery(id)

  return (
    <div className="space-y-3  mx-auto px-14">
      <h2 className='text-lg'>RTK query</h2>
      <div className="space-x-3">
        <input type="number" value={id} onChange={e => setId(e.target.value as unknown as number)} className="w-20 bg-zinc-700 p-1" />
      </div>
      <div>
        {t('dash.postmsg', { num: id })}

        {
          isLoading ?
            <div>loading</div> :
            <div className="text-xl text-green-400">{error ? 'error' : data?.title}</div>
        }
      </div>
    </div>
  )
}

export default Post