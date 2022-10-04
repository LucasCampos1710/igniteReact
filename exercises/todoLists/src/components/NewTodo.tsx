import styles from './NewTodo.module.css'
import { PlusCircle } from 'phosphor-react'

export function NewTodo() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.inputTodo}>
        <input type="text" placeholder='Adicione uma nova tarefa' />

        <button className={styles.button}>
          Criar
            <span>
                <PlusCircle />
            </span>
          </button>
      </form>
    </div>
  )
}