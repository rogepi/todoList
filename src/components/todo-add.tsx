import { useRef } from "react"
import { useTranslation } from "react-i18next"

const TodoAdd = ({ add }: { add: (v: string) => void }) => {
  const { t } = useTranslation()
  const ref = useRef<HTMLInputElement>(null)
  const addTodo = () => {
    if (ref.current && ref.current.value !== '')
      add(ref.current?.value)
  }
  return (
    <div className="flex justify-between gap-3">
      <input className="text-black p-1 rounded" ref={ref} />
      <button className="bg-white p-1 px-2 rounded font-semibold text-black hover:bg-gray-100" onClick={addTodo}>{t("todo.add")}</button>
    </div>
  )
}

export default TodoAdd