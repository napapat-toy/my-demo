import '../App.css';

function PostItem(props) {

    console.log(props);
    const { id, content  } = props.postItem;
    const {onDeleteComment, onEditComment} = props;
    return (
        <div className="post-content">
            <div className="post-content-header">
                Post {id}
            </div>
            <p>
                {content}
            </p>
            <p>
                <a onClick={() => { onEditComment(id) }}>Edit</a>
                <span> : </span>
                <a onClick={() => { onDeleteComment(id) }}>Delete</a>
            </p>
        </div>
    )
}

export default PostItem;