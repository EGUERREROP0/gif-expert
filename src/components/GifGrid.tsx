// import { useEffect, useState } from "react"
// import { getGif } from "../helpers/getGif"
import { useFetchGifs } from "../hooks"
import { GifGridItem } from "./GifGridItem"

interface Props {
    category: string
}

export const GifGrid = ({category}:Props) => {

    const {images, isLoading} = useFetchGifs(category)
    

  return (
    <>
    
        <h3>{category}</h3>
        {
            isLoading && (<h2>Loading...</h2>)
        }
        <div className="card-grid">
            {
            images.map(({id, title, url}) => (
                <GifGridItem  key={id} title={title} url={url}/>
            ))
           }
        </div>
    
    </>
  )
}
