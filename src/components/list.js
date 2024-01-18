import { useEffect, useState } from "react"
import { useDispatch , useSelector} from "react-redux"
import { fetchData } from "../redux/getAllData"
import { Loading } from "./loading"
import Pagination from "./pagination/pagination"
import { handelPage, pageItems } from "./pagination/handelPages"

const List =()=>{
    const [page , setPage] = useState(0)
    const [pages , setPages] = useState(0)
    const [number , setNumber] = useState(5)
    const dispatch = useDispatch()
    const allList = useSelector(state => state)

    useEffect(()=>{
        dispatch(fetchData())
        let p = 1
        if(allList.getAll.list.items.length){
            p = handelPage(allList.getAll.list.items.length,number)
        }
        setPages(p)
    },[dispatch])

    const changePage=(page)=> {
        if(pages <= page && page >= 1){
          setPages(page)
        }
      }
    
    let datas = <Loading/>
    if(allList.getAll.list.items){
        let newArray = [...allList.getAll.list.items];
        let newItem = pageItems(newArray,number,page);
        datas =  newItem.map((value , index)=> <div key={index} className="row d-flex flex-row w-auto justify-content-start p-3 mb-3 bg-light border-0 rounded text-center">{value.id}</div>)
    }
    return (
        <div className="position-relative d-grid justify-content-justify w-100 p-5">
            {datas}
            <Pagination changePage={changePage} page={page} pages={pages}/>
        </div>
    )
}
 export default List