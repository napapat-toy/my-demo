import '../App.css';

function PostItem(props) {

    console.log(props);
    const { id, content } = props.postItem;
    const { deleteComment } = props.deleteComment;

    function onCommentEdit(commentId) {
        console.log(`Edit at id : ${commentId}`);
    }

    function onCommentDelete(commentId) {
        console.log(`Delete at id : ${commentId}`);
    }

    return (
        <div className="post-content">
            <div className="post-content-header">
                Post {id}
            </div>
            <p>
                {content}
            </p>
            <p>
                <a onClick={() => { onCommentEdit(id) }}>Edit</a>
                <span> : </span>
                <a onClick={deleteComment}>Delete</a>
            </p>
        </div>
    )
}

export default PostItem;