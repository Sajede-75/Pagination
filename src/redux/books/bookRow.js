
const BookRow =(props)=>{
    const bookInfo = (info)=>{
        if(info.saleInfo){
            let price = <p className="card-text w-100"> {info.saleInfo.saleability }</p>
            let image = <div 
                        style={{height:'15rem'}}
                        className="w-100 object-fit-fill rounded m-0 p-0 opacity-25 bg-dark" 
                        ></div>
            if(info.volumeInfo.imageLinks){
                image = <img src={info.volumeInfo.imageLinks.thumbnail} 
                style={{height:'15rem'}}
                className="card-img img-fluid object-fit-fill rounded m-0 p-0 opacity-25" 
                alt={info.volumeInfo.title}
                />
            }
            if(info.saleInfo.isEbook && (info.saleInfo.saleability !== 'FREE')){
                let p = info.saleInfo.listPrice.amount +'    '+ info.saleInfo.listPrice.currencyCode
                price = (<p className="card-text w-100"> 
                                <span className="fs-4">Price:</span>
                                <span className="fw-bold fs-4">{p}</span>
                        </p> )  
            }
            return(
                <div className="card bg-dark text-white m-0 p-0 border-0 d-flex align-items-center justify-contetnt-between mt-2">
                    {image}
                    <div className="card-img-overlay img-fluid rounded m-0 p-5 ">
                        {price}
                        <p className="card-text text-truncate w-100"> {info.volumeInfo.description}</p>
                        <h6 className="mb-4">publisher : {info.volumeInfo.publisher} &#40; {info.volumeInfo.publishedDate} &#41;</h6>
                        <a href={info.volumeInfo.infoLink} className="hoverLink col fs-6 fw-bolder text-decoration-none text-white text-uppercase p-1 ">more info</a>
                    </div>
                </div>
            )
        }
    }
    let book = props.list.map((value , index)=> 
        <div key={index} 
        className={"book row d-flex flex-row w-auto overflow-hidden p-2 m-2 mb-lg-1 bg-light border w-100 rounded text-center font-weight-medium font-size-base " + (props.open === value.id ? ' openBook ' :'')}
        onClick={()=> props.openClose(value.id)}
        >
            <h6 className="text-start m-0 p-0 fs-5 ">{value.volumeInfo.title}</h6>
            {(props.open === value.id) ? bookInfo(value) : ''}
        </div>
    )
    return book
}
export default BookRow