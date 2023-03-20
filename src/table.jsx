import { useState} from "react";
function Table(props) {
  // let [ counter, setCounter ] = useState(0);
  // const increament=()=> {
  //   setCounter(counter + 1);
  // }
  // const decreament = () => {
  //   if(counter>0)
  //   setCounter(counter - 1);
  // }
//   let [product, setProduct] = useState({
//     id: 1,
//     item: 'laptop',
//     Price: 5000,
//     qty:1
//   });
//   const increament = () => {
//    let copyProduct = { ...product };
//    copyProduct.Price =copyProduct.Price+ 10;
//     setProduct(copyProduct);
// }
  let [marks,setMarks] = useState([10,20,30,40,50]);
  const increament=(index) => {
    let copyMarks = [...marks];
    copyMarks[index]++;
    setMarks(copyMarks);
}
const decreament=(index) => {
    let copyMarks = [...marks];
    copyMarks[index]--;
    setMarks(copyMarks);
}
  return (
    <div>
      <ul>
        
        {marks.map((m,i) =>
          <div>
         <button type="button" className="btn btn-primary"onClick={()=>increament(i)}>+</button>
            <li>{m}</li>
            <button type="button" className="btn btn-primary"onClick={()=>decreament(i)}>-</button>
            </div>
        )}
          
        
</ul>
    </div>
    // <div>
    //   <h2>ID:{ product.id}</h2>
    //   <h2>item:{product.item }</h2>
    //   <h2>Price:{product.Price}</h2>
    //   <button type="button" className="btn btn-primary" onClick={increament}>Increament</button>
    //   </div>
        // <div>
        //     <h1>{ props.title}</h1>
        //     <table class="table">
        // <thead>
        //   <tr>
        //     <th scope="col">#</th>
        //     <th scope="col">First</th>
        //     <th scope="col">Last</th>
        //     <th scope="col">Handle</th>
        //   </tr>
        // </thead>
        // <tbody>
        //   <tr>
        //     <th scope="row">1</th>
        //     <td>Mark</td>
        //     <td>Otto</td>
        //     <td>@mdo</td>
        //   </tr>
        //   <tr>
        //     <th scope="row">2</th>
        //     <td>Jacob</td>
        //     <td>Thornton</td>
        //     <td>@fat</td>
        //   </tr>
        //   <tr>
        //     <th scope="row">3</th>
        //     <td>Larry</td>
        //     <td>the Bird</td>
        //     <td>@twitter</td>
        //   </tr>
        // </tbody>
        // </table>
        // {/* <h1>Counter ={counter}</h1>
        // <button type="button" className="btn btn-primary" onClick={increament}>Increament</button>
        // <button type="button" className="btn btn-danger"onClick={decreament}>Decreament</button> */}
      
        // </div>
    )
 
  
}

export default Table;