import React, {useState , useEffect} from 'react';
import './App.css';

import axios from 'axios';
import Home from './components/Home';
import Pagination from './components/Pagination';

function App() {


  interface User{
    userId: number,
    id: number,
    title: string,
    body: string
  }
  const [user , setUser]=useState<User[]>([]);

  const [loading , setLoading] = useState<boolean>(false);

  const [current , setCurrent] = useState<number>(1);

  const [perpage , setPerpage] = useState<number>(10);

  //change page
  const paginate = (pageNumber: React.SetStateAction<number>) =>{
    setCurrent(pageNumber);
  }

  useEffect(()=>{
    const fetchuser = async() =>{
      setLoading(true);
      const res= await(axios.get('https://jsonplaceholder.typicode.com/posts'))
      setUser(res.data);
      setLoading(false);
    }
    fetchuser();
  },[])

  // console.log(user)
  // Get current posts 
  const indexOfLastPost:number = current * perpage;

  const indexOfFirstPost:number = indexOfLastPost - perpage;

  const currentPosts = user.slice(indexOfFirstPost,indexOfLastPost);


  return (
    <div className="container mt-5">
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Home user={currentPosts} loading={loading}/>
      <Pagination postsPerPage={perpage} totalPosts={user.length} paginate={paginate}/>
    </div>
  );
}

export default App;


// https://jsonplaceholder.typicode.com/posts 
// 