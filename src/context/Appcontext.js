import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"



export const Appcontext=createContext();

export default function AppContextProvider({children}){

    const [loading,setloading]=useState(false);
    const[posts,setposts]=useState([]);
    const[page,setPage]=useState(1);
    const[totalPages,settotalPages]=useState(null);

    async function fetchBlogPosts(page=1){
        setloading(true);
        let url=`${baseUrl}?page=${page}`;
        console.log("printing url");
        console.log(url);

        try{
            const result=await fetch(url);
            const data=await result.json();
            console.log(data);
            setPage(data.page);
            setposts(data.posts);
            settotalPages(data.totalPages);

        }catch(error){
            console.log("erooe in data fetch");
            setPage(1);
            setPage([]);
            settotalPages(null);

        }
        setloading(false);
    }
    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    const value={
        loading,setloading,
        posts,setposts,
        page,setPage,
        totalPages,settotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    return <Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>


}