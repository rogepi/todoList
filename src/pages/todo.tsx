import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import TodoAdd from '../components/todo-add'
import TodoList from '../components/todo-list'

export interface Todo {
  id: number
  content: string
  check: boolean
}
let nextId = 0

const Todo = () => {
  const { t } = useTranslation()
  const [list, setList] = useState<Todo[]>([])
  const add = (content: string) => {
    setList([...list, { id: nextId++, content, check: false }])
    console.log(list)
  }

  const check = (id: number, check: boolean) => {
    setList(list.map(item => {
      if (item.id === id)
        item.check = check
      return item
    }))
  }

  const edit = (id: number, content: string) => {
    setList(list.map(item => {
      if (item.id === id)
        item.content = content
      return item
    }))
  }

  const del = (id: number) => {
    setList(list.filter(item => item.id !== id))
  }
  return (
    <>
      <h1 className='font-bold text-6xl'>{t("todo.todolist")}</h1>
      <Link className='text-base underline mx-2' to="/dash">{t("todo.backtodash")}</Link>
      <div className="my-3 w-50">
        <TodoAdd add={add} />
        <TodoList list={list} check={check} edit={edit} del={del} />
      </div>
    </>
  )

}

export default Todo