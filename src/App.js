import { useState } from 'react';
import './App.css';
// import PostCreate from './components/PostCreate';
import PostItem from './components/PostItem';
// import PostData from './postdata';

const emptyComment = {
  content: ''
};

function App() {

  //State
  const [comment, setComment] = useState('')
  const [allComments, setAllComments] = useState([])

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
      newComment.id = allCommentsElements.length + 1
      return [...prevAllComment, newComment]
    });

    //Clear Form
    setComment(emptyComment);
  }

  //Pass function to postitem
  function deleteComment(commentId) {
    console.log("id :" + commentId);
  }

  //Call comment element
  const allCommentsElements = allComments.map((comment) => {

    return (
      <PostItem
        key={comment.id}
        postItem={comment}
        deleteComment={() => deleteComment(comment.id)}
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
    </section>
  );
}

export default App;
