import { useState } from 'react';
import './App.css';
// import PostCreate from './components/PostCreate';
import PostItem from './components/PostItem';
import uuid from "uuid";

const emptyComment = {
  content: ''
};

function App() {

  //State
  const [comment, setComment] = useState(emptyComment);
  const [allComments, setAllComments] = useState([]);
  const [editComment, setEditComment] = useState(null);

  //Type Comment Function
  function onCommentChange(event) {
    const content = event.target.value;
    setComment((prevComment) => {
      return {
        ...prevComment,
        content
      };
    });
  }

  function onCommentSubmit(event) {
    event.preventDefault();

    //Add Comment Function
    setAllComments((prevAllComment) => {
      const newComment = { ...comment };
      newComment.id = Date.now().toString();
      newComment.uniqueKey = uuid();
      return [...prevAllComment, newComment]
    });

    //Clear Form
    setComment(emptyComment);
  }

  //Pass function delete,edit to postitem

  //Delete Comment
  function onDeleteComment(deleteCommentId) {
    console.log("id : " + deleteCommentId);
    setAllComments((prevAllComment) => {
      return prevAllComment.filter(comment => comment.uniqueKey !== deleteCommentId)
    });
  }

  //Edit Comment
  function onEditComment(event) {
    event.preventDefault();

    setAllComments((prevAllComments) => {
      return prevAllComments.map((comment) => {
        if (comment.uniqueKey !== editComment.uniqueKey) return comment;
        return editComment;
      });
    });

    //Clear Edit Form
    setEditComment(null);
  }


  //Edit Comment Value Change
  function onEditCommentValueChange(event) {
    console.log(event.target.value);
    const content = event.target.value;
    setEditComment((prevEditComment) => {
      return {
        ...prevEditComment,
        content
      };
    });
  }

  //Edit Comment Form
  let editCommentElement = null;
  if (!!editComment) {
    editCommentElement = (
      <div className="post-edit-comment">
        <form onSubmit={onEditComment}>
          <p>
            <textarea
              rows="3"
              placeholder="Edit comment"
              name="content"
              value={editComment.content}
              onChange={onEditCommentValueChange}
            />
          </p>
          <p>
            <button type="submit">Edit</button>
          </p>
        </form>
      </div>
    );
  }

  //Call comment element
  const allCommentsElements = allComments.map((comment, index) => {
    return (
      <PostItem
        key={comment.id}
        postItem={comment}
        index={index}
        onDeleteComment={() => { onDeleteComment(comment.uniqueKey) }}
        onEditComment={() => { setEditComment(comment) }}
      />
    )
  })

  return (
    <section className="app-section">
      <h1>Topic</h1>
      <div className="app-container">
        <div className="post-create post-content">
          <div className="post-content-header">
            Comment
            </div>
          <form onSubmit={onCommentSubmit}>
            <p>
              <textarea
                row="2"
                placeholder="Type comment here"
                name="content"
                value={comment.content}
                onChange={onCommentChange}
              />
            </p>
            <p>
              <button type="submit">Post Comment</button>
            </p>
          </form>
        </div>
        {allCommentsElements}
      </div>
      {editCommentElement}
    </section>
  );
}

export default App;
