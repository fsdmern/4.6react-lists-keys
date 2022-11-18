import './App.css';
import NumberList from './components/numberlist/NumberList';
import Blog from './components/blog/Blog';


function App() {
  const numbers = [1,2,3,4,5]
  const posts = [
    {id: 1, title: 'My First Post', content: 'Welcome to my first post'},
    {id: 2, title: 'My Second Post', content: 'Welcome to my second post'},
    {id: 3, title: 'My Third Post', content: 'Welcome to my third post'},
  ];
   
  return (
    <div>
      <h1>Learning React Lists and Keys</h1>
      <NumberList numbers={numbers} />
      <hr />
      <h1>My Blog:</h1>
      <Blog posts={posts} />
    </div>
  );
}

export default App;
