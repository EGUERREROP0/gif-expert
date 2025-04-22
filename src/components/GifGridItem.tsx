import { Gif } from "../hooks"

export const GifGridItem = ({ title, url }:Gif) => {
  return (
        <div className="card">
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>
  )
}
