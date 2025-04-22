import { useState } from "react"
import AddCategory from "./AddCategory"
import { GifGrid } from "./GifGrid"

const GifExpertApp = () => {

    const [categories, setCategories] = useState([] as string[])

    const onAddCategory = (newCategory:string)=> {
       // const newCategory = prompt('Ingrese una nueva categoria')
        if (!newCategory) return
        setCategories([newCategory, ...categories])
        
    }
  return (
    <>
        {/* <button onClick={onAddCategory}>Agregar</button> */}

      <h1>Este es Mi gif Expert App</h1>
      <AddCategory propsSetCategory = {onAddCategory} />


      {categories.map(category =>(
            <GifGrid 
            key={Date.now() + Math.random() } 
            category={category}
            />
          ))}
      
    </>
  )
}

export default GifExpertApp
