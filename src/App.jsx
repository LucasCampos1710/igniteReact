import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/lucascampos1710.png",
      name: "Lucas Campos",
      role: "CTO  @ Solux Creative",
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋,' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-31 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator  @ Rocketseat",
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋,' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-09-01 09:00:00'),
  },
]

export function App() {

  return (
    <>
      <Header />

      <div className={ styles.wrapper }>
        <Sidebar />
        <main>
          { posts.map(post => {
            return (
              <Post
                key={post.id}
                author={ post.author }
                content={ post.content }
                publishedAt={ post.publishedAt }
              />
            )
          }) }
        </main>
      </div>
    </>
  )
}

