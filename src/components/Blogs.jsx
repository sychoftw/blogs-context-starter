import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import Spinner from './Spinner';
import "./Blogs.css"
const Blogs = () => {
  //consume data from  appcotext
  const {loading,posts}=useContext(Appcontext);

  return (
    <div className=' mb-[70px] w-11/12 max-w-[670px] mt-[67px] py-8 flex flex-col gap-y-7'>
      {
        loading?(<Spinner/>):(
          posts.length===0 ?(<div>
            <p>No post found</p>
          </div>):
          (posts.map((post)=>(
            <div key={post.id}>
              <p className=' font-bold text-lg'>{post.title}</p>
              <p className='text-sm mt-[4px] ' >By <span  className=' italic font-bold underline '>{post.author}</span> on <span>{post.category}</span></p>
              <p className=' text-sm mt-[4px]'>Posted on {post.date}</p>
              <p className='text-md mt-[14px]'>{post.content}</p>
              <div className=' gap-x-3  flex'>
                {post.tags.map((tag,index)=>{
                  return <span className='text-blue-700 underline mt-5px font-bold  text-xs' key={post.index}>{`#${tag}`}</span>
                })}
              </div>
            </div>
          )))
        )
      }
    </div>
  )
}

export default Blogs
