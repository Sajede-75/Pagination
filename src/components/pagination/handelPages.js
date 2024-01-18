

export function handelPage(items , num){
    let pages = Math.floor(items/num);
    if(pages !== (items/num)){
        pages = 1 + pages;
    }
    return pages
}



export function pageItems(items , num , page ){
    let newOrders = items.splice(
        (page - 1) * num,
        num
    )
    return newOrders
}

