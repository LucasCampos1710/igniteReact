import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Post muito daora 👏👏'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  // com a lib date-fns
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })
  // utilizando o Intl do proprio javascript
  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
  //   day: '2-digit',
  //   month:'long',
  //   hour:'2-digit',
  //   minute: '2-digit'
  // }).format(publishedAt);

  function handleCreateNewComment(event) {
    event.preventDefault()

    setComments([...comments, newCommentText])

    setNewCommentText('')


    // modo simples porem não o mais correto
    // const newCommentText = event.target.comment.value

    // setComments([...comments,  newCommentText])

    // event.target.comment.value = ''
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Esse campo é obrigatorio!')
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={ styles.post }>
      <header>
        <div className={ styles.author }>
          <Avatar hasBorder={ true } src={ author.avatarUrl } />
          <div className={ styles.authorInfo }>
            <strong>{ author.name }</strong>
            <span>{ author.role }</span>
          </div>
        </div>

        <time title={ publishedDateFormatted } dateTime={ publishedAt.toISOString() }>
          { publishedDateRelativeToNow }
        </time>
      </header>

      <div className={ styles.content }>
        { content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={ line.content }>{ line.content }</p>
          } else if (line.type === 'link') {
            return <p key={ line.content }><a href="#">{ line.content }</a></p>
          }
        }) }

      </div>

      <form onSubmit={ handleCreateNewComment } className={ styles.commentForm }>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={ newCommentText }
          onChange={ handleNewCommentChange }
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={ styles.commentList }>
        { comments.map(comment => {
          return (
            <Comment
              key={ comment }
              content={ comment }
              onDeleteComment={ deleteComment }
            />
          )
        }) }
      </div>
    </article>
  )
}