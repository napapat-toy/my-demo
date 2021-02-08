import '../App.css';

function PostItem(props) {

    console.log(props);
    const { content, uniqueKey } = props.postItem;
    const { onDeleteComment, onEditComment, index } = props;
    return (
        <div className="post-content">
            <div className="post-content-header">
                Post {index + 1}
            </div>
            <p>
                {content}
            </p>
            <p>
                <a onClick={() => { onEditComment(uniqueKey) }}>Edit</a>
                <span> : </span>
                <a onClick={() => { onDeleteComment(uniqueKey) }}>Delete</a>
            </p>
        </div>
    )
}

export default PostItem;