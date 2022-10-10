// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {eachOneComment, toggleLike, onDelete} = props
  const {id, name, comment, initialClassName, date, isLike} = eachOneComment

  const sliceName = name.slice(0, 1)
  const postedTime = formatDistanceToNow(date)

  let resultImage
  let likeClassName

  if (isLike) {
    resultImage = (
      <img
        src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
        alt="like"
      />
    )
    likeClassName = 'likedText'
  } else {
    resultImage = (
      <img
        src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
        alt="like"
      />
    )
    likeClassName = 'likeText'
  }

  const onClickLike = () => {
    toggleLike(id)
  }

  const onDeleteComment = () => {
    onDelete(id)
  }

  return (
    <li className="list-item-container">
      <div className="listItem">
        <p className={`circle ${initialClassName}`}>{sliceName}</p>
        <p className="name">{name}</p>
        <p className="date">{postedTime}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="likeAndDelete">
        <div className="likeImg">
          <button type="button" onClick={onClickLike} className="likeBtn">
            {resultImage}
            <span className={likeClassName}>Like</span>
          </button>
        </div>
        <button
          type="button"
          onClick={onDeleteComment}
          className="deleteBtn"
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
