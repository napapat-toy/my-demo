import { useState } from 'react';
import '../App.css';

function PostCreate(props) {

    // console.log(props);
    const [comment, setComment] = useState([])

    function onCommentChange(event) {
        const { commentValue } = event.target;
        setComment((prevComment) => {
            return {
                ...prevComment,
                [commentValue]: commentValue
            }
        });
    }
    function onCommentSubmit(event) {
        event.preventDefault();
        console.log(event);
    }

    return (
        <div className="post-create post-content">
            <div className="post-content-header">
                Comment
            </div>
            <form onSubmit={onCommentSubmit}>
                <textarea
                    type="text"
                    placeholder="Type comment here"
                    name="commentValue"
                    value={comment.textValue}
                    onChange={onCommentChange}
                />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default PostCreate;