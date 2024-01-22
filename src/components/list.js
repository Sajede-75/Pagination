import { useEffect, useState } from "react"
import { useDispatch , useSelector} from "react-redux"
import { Loading } from "./loading"
import Pagination from "./pagination/pagination"
import { handelPage, pageItems } from "./pagination/handelPages"
import ShowCount from "./pagination/ShowCount"
import BookRow from "../redux/books/bookRow"
import { allBooks } from "../redux/action"

const List =()=>{
    const [page , setPage] = useState(1)
    const [pages , setPages] = useState(0)
    const [number , setNumber] = useState(5)
    const [open , setOpen]= useState(false)

    const dispatch = useDispatch()
    const allList = useSelector(state => state.all)
    useEffect(()=>{
        dispatch(allBooks())
    },[dispatch ])
    useEffect(()=>{
        let p = 1 
        if(allList && allList.list.items){
            p = handelPage(allList.list.items.length,number)
        }
        setPages(p)
    },[number , allList.list.items]) 

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

    const openClose=(id)=>{
        if(open === id){
            setOpen(false)
        }else{
            setOpen(id)
        }
    }

    let datas 
    if(allList.sending){
        datas = <Loading/>
    }else{
        if(allList.list.items){
            let newArray = [...allList.list.items];
            let newItem = pageItems(newArray,number,page);
            datas= <BookRow list={newItem} openClose={openClose} open={open}/>
        }else{
            datas= <h3 className="m-3 fs-5">NOTHING FIND</h3>
        }
    }

    return (
        <div data-bs-theme="light" 
        className="position-relative d-grid  w-100 px-lg-3 py-3 text-center h-auto mb-lg-5 bg-white rounded-bottom px-2"
        >
            <ShowCount changeNumber={changeNumber} number={number}/>
            {datas}
            <Pagination changePage={changePage} page={page} pages={pages}/>
        </div>
    )
}
 export default List