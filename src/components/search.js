import { useState } from "react"
import { useDispatch} from "react-redux"
import { allBooks, searchBook } from "../redux/action"

const Search =()=>{
    const [ search , setSearch ] = useState('')
    const dispatch = useDispatch()
    return (
        <div className="position-relative p-5 d-flex flex-row w-100 justify-content-center align-items-center shadow bg-transparet z-index-1">
            <input type="text" 
            value={search} 
            onChange={(e)=>setSearch(e.target.value)} 
            className="form-control mx-3 mw-100" 
            style={{width:'20em'}}
            placeholder="Search book's name"
            />
            <button className="btn btn-primary " onClick={()=> dispatch(allBooks({search}))}>search</button>
        </div>
    )
}
 export default Search