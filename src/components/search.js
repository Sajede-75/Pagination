import { useState } from "react"
import { useDispatch} from "react-redux"
import { allBooks } from "../redux/action"

const Search =()=>{
    const [ search , setSearch ] = useState('')
    const dispatch = useDispatch()
    const searchAction=(text)=>{
        if(text){
            dispatch(allBooks({text}))
        }
    }
    return (
        <div className="position-relative p-lg-3 p-2 d-flex flex-row w-100 justify-content-center align-items-center shadow bg-transparet  bg-body-secondary rounded-top ">
            <input type="text" 
            value={search} 
            onChange={(e)=>setSearch(e.target.value)} 
            className="form-control mx-lg-3 mw-100 mx-2" 
            style={{width:'20rem'}}
            placeholder="Search book's name"
            required
            />
            <button className="btn btn-outline-secondary"  onClick={()=> searchAction(search)}>search</button>
        </div>
    )
}
 export default Search