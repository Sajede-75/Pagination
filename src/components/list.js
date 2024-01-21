import { useEffect, useState } from "react"
import { useDispatch , useSelector} from "react-redux"
import { Loading } from "./loading"
import Pagination from "./pagination/pagination"
import { handelPage, pageItems } from "./pagination/handelPages"
import ShowCount from "./pagination/ShowCount"
import BookRow from "../redux/books/bookRow"
import { allBooks } from "../redux/action"

const List =(props)=>{
    const [page , setPage] = useState(0)
    const [pages , setPages] = useState(0)
    const [number , setNumber] = useState(5)
    const dispatch = useDispatch()
    const allList = useSelector(state => state.all)
    console.log('ssss', allList)
    useEffect(()=>{
        dispatch(allBooks())
        let p = 1 
        if(allList && allList.list.items){
            p = handelPage(allList.list.items.length,number)
        }
        setPages(p)
    },[dispatch])
    useEffect(()=>{
        let p = 1 
        if(allList && allList.list.items){
            p = handelPage(allList.list.items.length,number)
        }
        setPages(p)
    },[number]) 
    
    const changeNumber=(e)=> {
        setNumber(e.target.value)
    }
    const changePage=(page)=> {
        if(page <= pages && page >= 1){
            setPage(page)
            if(allList.list.items){
                let p = handelPage(allList.list.items.length,number)
                setPages(p)
            }
        }
    }
    
    let datas 
    if(allList.sending){
        datas = <Loading/>
    }else{
        if(allList.list.items){
            let newArray = [...allList.list.items];
            let newItem = pageItems(newArray,number,page);
            datas= <BookRow list={newItem}/>
        }else{
            datas= <h3 className="m-3">NOTHING FIND</h3>
        }
    }

    return (
        <div className="position-relative d-grid justify-content-justify w-100 p-5 text-center h-auto mb-5 bg-light">
            <ShowCount changeNumber={changeNumber} number={number}/>
            {datas}
            <Pagination changePage={changePage} page={page} pages={pages}/>
        </div>
    )
}
 export default List