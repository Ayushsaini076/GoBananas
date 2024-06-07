import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

const Home = () => {
    const [arr,setArr]=useState([])
    const [allmovies,setAllMovies]=useState([])
    useEffect(()=>{
        const handleData = async()=>{
            try{
                const options = {
                    method: 'GET',
                    url: 'https://api.themoviedb.org/3/movie/popular',
                    params: {language: 'en-US', page: '1'},
                    headers: {
                      accept: 'application/json',
                      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDc0OTYwNzk4M2VhNDdkMzczODhmZDAyN2E4NjA3MSIsInN1YiI6IjY2NjI4ZjU3Zjk1Y2Q0YWUzOTEzMzliMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mouV0pEAFpRZJVch-2qqf2qD_B3-aUyYqCVr-0TW71U'
                    }
                  };
                  
                  axios
                    .request(options)
                    .then(function (response) {
                      setArr(response.data.results)
                      setAllMovies(response.data.results);
                    })
            }
            catch(err){
                console.log(err);
            }
        }
        handleData();
    },[])
    const [query,setQuery]=useState("");
    const handleInput=(e)=>{
        setQuery(e.target.value);
        const filteredArr = arr.filter((item) => {
            return item.title.toLowerCase().includes(query.toLowerCase());
        });
        setArr(filteredArr);
    }
  return (
    <div className='h-[100%]  justify-center pt-[2rem] bg-[#000000]'>
        <div className='flex w-full h-full justify-center'>
        <input
            placeholder="Search Movies"
            className=" h-[3rem] w-[75%] p-[2rem]  mb-[4rem] rounded-md shadow-md text-black transition-colors duration-300 ease-in-out hover:bg-gray-100"
            type="text"
            value={query}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className='flex flex-col items-center overflow-auto no-scrollbar'>
        {
            
            query===""?allmovies.map((item)=>{
                return(
                    <Card
                    title={item.title}
                    url={item.poster_path}
                    desc={item.overview}
                    date={item.release_date}
                    />
                )
            }):arr.map((item)=>{
                return(
                    <Card
                    title={item.title}
                    url={item.poster_path}
                    desc={item.overview}
                    date={item.release_date}
                    />
                )
            })
        }
        {/* {
            arr.map((item)=>{
                return(
                    <Card
                    title={item.title}
                    url={item.poster_path}
                    desc={item.overview}
                    date={item.release_date}
                    />
                )
            })
        } */}
        </div>
      
    </div>
  )
}

export default Home
