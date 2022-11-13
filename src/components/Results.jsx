import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from "react-player"
import { useResultContext } from '../contexts/ResultContextProvider'
import { Loading } from './Loading'

export const Results = () => {
  const {results, isLoading, getResults, searchTerm} = useResultContext();
  const location = useLocation();

  if (isLoading) return <Loading />

  console.log(location.pathname);

  switch (location.pathname) {
    case "/search":
      return 'SEARCH';
    case "/news":
      return 'NEWS';
    case "/images":
      return 'IMAGES';
    case "/videos":
      return 'VIDEOS';
  
    default:
      return "ERROR";
  }


  
}
