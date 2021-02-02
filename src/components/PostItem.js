
function PostItem(props) {

    // console.log(props);
    const { postId,content } = props.postItem;

    return (
        <div className="app-content">
            <div className="app-content-header">
                Post {postId}
            </div>
            <p>
                {content}
            </p>
        </div>
    )
}

export default PostItem;