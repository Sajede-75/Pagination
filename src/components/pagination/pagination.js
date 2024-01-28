import React from "react";


const Pagination =(props)=>{

    const handelPage=()=>{
        let pages = [];
        let start = (props.page - 2 > 0) ? props.page - 2 : 1;
        let end = (props.page + 2 < props.pages) ? props.page + 2 : props.pages ;
        if(start > 1){
            pages.push(
                <span className={"page  " + ((1 === props.page) ? ' border-dark' : '')} onClick={() => props.changePage( 1 )} key={0}>
                    {0 + 1}
                </span>
            )
            if(start !== 2){
                pages.push(
                    <span className={"page  "}  key={-1}>
                    ...
                    </span>
                )
            }
        }

        for(let i = start -1 ; i < end ; i++){
            pages.push(
                <span className={"page  " + ((i+1 === props.page) ? ' border-dark' : '')} onClick={() => props.changePage( i+1 )} key={i}>
                    {i + 1}
                </span>
        )   
        }
        if(end < props.pages){
            if(end !== props.pages -1){
                pages.push(
                    <span className={"page "}  key={-2}>
                    ...
                    </span>
                )
            }
            pages.push(
                <span className={" page " + ((props.pages === props.page) ? ' border-dark' : '')} onClick={() => props.changePage( props.pages  )} key={props.pages - 1}>
                    {props.pages}
                </span>
                )
            }
        return pages
    }
    return(
        <div className="m-2 d-flex flex-row justify-content-center align-items-center" >
            <div className="page" onClick={() => props.changePage( props.page - 1 )}>
                <svg className="p-0 m-0"style={{width:'1rem', transform:'rotate(180deg)'}} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 150 150">
                <title>next</title>
                <path className="st0" d="M49.9,148c-5.6,0-10.1-4.6-10.1-10.2c0-2.5,1-5,2.7-6.8l49-52c2.8-3,2.7-7.7-0.3-10.5l-52-49 c-4.1-3.8-4.3-10.3-0.4-14.4s10.3-4.3,14.4-0.4l51.9,49.1c11.1,10.5,11.6,28,1.1,39.1l-49.1,52C55.4,146.9,52.7,148,49.9,148z"></path>
                </svg>
            </div>
            {handelPage()}
            <div className="page" onClick={() => props.changePage( props.page + 1 )}>
                <svg className="p-0 m-0"style={{width:'1rem'}} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 150 150">
                <title>previse</title>
                <path className="st0" d="M49.9,148c-5.6,0-10.1-4.6-10.1-10.2c0-2.5,1-5,2.7-6.8l49-52c2.8-3,2.7-7.7-0.3-10.5l-52-49 c-4.1-3.8-4.3-10.3-0.4-14.4s10.3-4.3,14.4-0.4l51.9,49.1c11.1,10.5,11.6,28,1.1,39.1l-49.1,52C55.4,146.9,52.7,148,49.9,148z"></path>
                </svg>
            </div>
        </div>
    )
}

export default Pagination