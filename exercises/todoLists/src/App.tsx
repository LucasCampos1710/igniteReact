import { Logo } from "./components/Logo";
import styles from './App.module.css'
import { NewTodo } from "./components/NewTodo";
import { ListTodo } from "./components/ListTodo";

export function App() {

  return (
    <div>
      <header className={styles.header}>
        <Logo />
      </header>
      <NewTodo />

      <ListTodo />
    </div>
  )
}

