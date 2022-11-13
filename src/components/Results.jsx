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
      // getResults(`${searchTerm}&num=30`)
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
    case "/news":
      return (
        <div className="flex flex-wrap justify-between sm:px-56 items-center">

          {results?.data?.news?.map(({url, title}, index) => (
            <div key={index} className="md:w-1/2 w-full mb-6">
              <a href={url} target="_blank" rel="noreferrer" className="hover:underline">
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <div className="flex gap-4"></div>
              </a> 
            </div>
          ))}

        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-center items-center">
            {results?.data?.image_results?.map(({image, url: {href, title}}, index) => (
              <a className="sm:p-3 p-5" href={href} key={index}  target="_blank" rel="noreferrer">
                <img src={image?.src} alt={title} loading="lazy"/>
                <p className="w-36 break-words text-sm mt-2">
                  {title}
                </p>
              </a>
            ))}
        </div>
      );
    case "/videos":
      return (
        <div className="flex flex-wrap">
          {results?.data?.video_results?.map((video, index) => (
            <div key={index} className="p-2">
              <ReactPlayer url={video.additional_links[0].href} controls width="355px" height="200px" />
            </div>
          ))}
        </div>
      );
  
    default:
      return "ERROR";
  }


  
}
