
import './App.css';
import PostItem from './components/PostItem';
import PostData from './postdata';

function App() {

  const postItems = PostData.map((postItem,index)=>{
    return <PostItem key={index} postItem={postItem} />
  })

  return (
    <section className="app-section">
      <h1>Topic</h1>
      <div className="app-container">
        {postItems}
      </div>
    </section>
  );
}

export default App;
