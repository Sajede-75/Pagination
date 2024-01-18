import { useState } from "react"
import { useDispatch , useSelector} from "react-redux"
import { fetchDataSearch } from "../redux/getSearch"

const Search =()=>{

    const [ search , setSearch ] = useState('')
    const dispatch = useDispatch()
    const selector = useSelector((state)=> state)
    console.log(selector)
    return (
        <div className="position-relative w-50 m-4 mx-auto d-flex flex-row w-80  justify-content-center align-items-center">
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} class="w-8 form-control mx-3" />
            <button className="btn btn-primary " onClick={()=> dispatch(fetchDataSearch({bookname : search}))}>search</button>
        </div>
    )
}
 export default Search