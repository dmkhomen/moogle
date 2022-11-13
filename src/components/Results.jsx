import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReactPlayer from "react-player"
import { useResultContext } from '../contexts/ResultContextProvider'
import { Loading } from './Loading'

export const Results = () => {
  const {results, isLoading, getResults, searchTerm} = useResultContext();
  const location = useLocation();
  useEffect(() => {
    if(searchTerm) {
      getResults(`${searchTerm}&num=30`)
    }
  }, [searchTerm, location.pathname])
  

  if (isLoading) return <Loading />
  
  
  console.log(location.pathname);
  
  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between sm:px-56">

          {results?.data?.organic_results?.map(({url, title}, index) => (
            <div key={index} className="md:w-1/2 w-full mb-6">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm">
                🐄 {url.length > 30 ? url.substring(0, 30) : url}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a> 
            </div>
          ))}
        </div>
      );
      case "/videos":
      return (
        <div className="flex flex-wrap">
          {results?.data?.video_results?.map(({title, url, image}, index) => (
            <div key={index} className="p-2">
              {<ReactPlayer url={url} controls width="355px" height="200px" />}
              <p>{title}</p>
            </div>
          ))}
        </div>
      );
  
    default:
      return "ERROR";
  }


  
}
