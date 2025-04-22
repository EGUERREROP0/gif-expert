import { useState } from "react"
interface Props {
    propsSetCategory: (category:string) => void
}

const AddCategory = ({propsSetCategory}: Props) => {


    const [inptValue, setinptValue] = useState('')

    const onInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setinptValue(e.target.value)
       // console.log(inptValue)
    }

    const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(inptValue.trim().length <= 1) return
       // propsSetCategory(cats => [inptValue, ...cats])
        propsSetCategory(inptValue)
        //console.log(inptValue)
        setinptValue('')
        
    }
 
    

    return (
    
        <form action="" onSubmit={onSubmit}>
            <input type="text"
                placeholder="Busca tu gif..."
                value={inptValue}
                onChange={onInputChange}
            />
        </form>
    
  )
}

export default AddCategory
