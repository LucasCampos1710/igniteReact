import { Trash } from 'phosphor-react'
import styles from './ListTodo.module.css'

export function ListTodo() {
  return (
    <div className='styles.main'>
      <div>
        <strong>Tarefas criadas</strong>
        <span>5</span>

        <div>
          <strong>Concluidas</strong>
          <span>2 de 5</span> 
        </div>
      </div>

      <div className='styles.container'>
          <form className='styles.formTodo'>
            <input type="checkbox" name="" id="" placeholder="Finalizar layout quintal" />
            <button>
              <Trash size={20} />
            </button>
          </form>
      </div>

      
    </div>
  )
}