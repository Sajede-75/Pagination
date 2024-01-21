

export default function ShowCount(props){
    let count=[5,10,15,20]
    const eachCount = ()=>{
        let counts = count.map((num ,index)=>{
            return <option key={index} className={"btn left-svg mw-5 border rounded m-1 p-1 "+ (props.number === num ? 'border-secondary':'')}>{num}</option>
        })
        return counts
    } 
    const ItemShow= ()=>{
        return(
            <select 
            className="position-relative w-20 m-20 p-2 justify-content-start align-items-center border rounded"
            onChange={props.changeNumber}
            value={props.num}
            select={count}>
                {eachCount()}
            </select>
        )
    }
    return(
        <div
        className='position-relative d-flex flex-row-reverse mw-30 align-items-center mb-3'
        style={{height:'2rem'}}
        >
            <h5 className="m-2">count </h5>
            {ItemShow()}
        </div>
    )
}