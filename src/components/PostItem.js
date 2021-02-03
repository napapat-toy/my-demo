import '../App.css';

function PostItem(props) {

    // console.log(props);
    const { id,content } = props.postItem;

    return (
        <div className="post-content">
            <div className="post-content-header">
                Post {id}
            </div>
            <p>
                {content}
            </p>
        </div>
    )
}

export default PostItem;