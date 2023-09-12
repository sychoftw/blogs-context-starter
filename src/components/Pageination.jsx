import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'

const Pageination = () => {
const{page,  handlePageChange,totalPages}=useContext(Appcontext);

  return (
    <div className='fixed bottom-0   bg-white   w-full flex justify-center items-center border-2 '>
      <div className='  flex  justify-between w-11/12 max-w-[670px] py-2 '>
        <div className='flex gap-x-2'>
        {page>1&&
          <button className=' rounded-md border-2  px-5 py-1 ' onClick={()=>{
            handlePageChange(page-1);
          }}
          >Previous</button>
        }{
          page<totalPages&&(<button 
          className=' rounded-md border-2  px-5 py-1 '
           onClick={()=>{
            handlePageChange(page+1);
          }}
          >Next

          </button>)
        }
        </div>
        <p className=' font-bold text-sm '>page {page} of {totalPages}</p>
      </div>
    </div>
  )
}

export default Pageination
