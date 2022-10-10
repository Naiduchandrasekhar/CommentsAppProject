import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem/index'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentArray: [],
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentArray: prevState.commentArray.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  onDelete = id => {
    const {commentArray} = this.state
    const filtercomment = commentArray.filter(eachOne => eachOne.id !== id)
    this.setState({commentArray: filtercomment})
  }

  onClickAdd = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const randomColor = Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )
    const initialBackgroundColorClassName =
      initialContainerBackgroundClassNames[randomColor]

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      initialClassName: initialBackgroundColorClassName,
      date: new Date(),
      isLike: false,
    }

    this.setState(prevState => ({
      commentArray: [...prevState.commentArray, newComment],
      name: '',
      comment: '',
    }))
  }

  onNameValue = event => {
    this.setState({name: event.target.value})
  }

  onTextValue = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentArray, name, comment} = this.state
    const count = commentArray.length

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Comments</h1>
          <div className="comments-container">
            <div className="form-container">
              <p className="para">Say something about Technologies</p>
              <form onSubmit={this.onClickAdd}>
                <input
                  type="text"
                  placeholder="Your Name"
                  onChange={this.onNameValue}
                  value={name}
                />
                <br />
                <br />
                <textarea
                  rows="7"
                  cols="26"
                  placeholder="Your Comment"
                  onChange={this.onTextValue}
                  value={comment}
                />
                <br />
                <button type="submit" className="button">
                  Add Comment
                </button>
              </form>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="commentsImage"
              />
            </div>
          </div>
          <hr />
          <div className="second-container">
            <p>
              <span className="count"> {count}</span> Comments
            </p>
            <ul className="unorderContainer">
              {commentArray.map(eachOneComment => (
                <CommentItem
                  key={eachOneComment.id}
                  eachOneComment={eachOneComment}
                  toggleLike={this.toggleLike}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
