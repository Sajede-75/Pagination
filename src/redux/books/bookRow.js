import { useState } from "react"

const BookRow =(props)=>{
    const [open , setOpen]= useState(false)
    const bookInfo = (info)=>{
        if(info){
            let price =info.saleInfo.listPrice.amount + info.saleInfo.listPrice.currencyCode
            return(
                <div class="container position-relative  justify-content-start align-items-center ">
                    <div className="row">
                        <img src={info.volumeInfo.imageLinks.smallThumbnail} 
                        className=" m-0 p-0 col ratio object-fit-cover border rounded"  
                        style={{width:'2rem', height:'2rem'}}
                        alt={info.volumeInfo.title}
                        />
                        <div className="col p-0 m-0 border-left">
                            <span className="fs-4">Price:</span>
                            <span className="fw-bold fs-4">{price}</span>
                            
                        </div>
                    </div>
                    <div className="row">
                        <p className="text-truncate col-8  fs-5 fw-light m-0  p-2 col-md-4" >
                            {info.volumeInfo.description}
                        </p>
                        <a href={info.volumeInfo.infoLink} className="col-4 fs-5 fw-bolder text-decoration-none hoverLink ">more info</a>
                    </div>
                </div>
            )
        }
    }
    let book = props.list.map((value , index)=> 
        <div key={index} 
        className={"book row d-flex flex-row w-auto overflow-hidden justify-content-start p-3 mb-3 bg-light rounded text-center font-weight-medium font-size-base hoverable" + (open === index ? ' openBook ' :'')}
        onClick={()=>{setOpen(index) ; console.log(value)}}
        >
            <h6 className="text-start m-0 p-0">{value.volumeInfo.title}</h6>
            {(open === index) ? bookInfo(value) : ''}
        </div>
    )
    return book
}
export default BookRow