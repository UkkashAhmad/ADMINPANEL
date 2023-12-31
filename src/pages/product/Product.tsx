import Single from '../../Components/single/Single'
import { singleProduct } from '../../data'
import './product.scss'
function Product() {

  // fetch data and send to single component
  return (
    <div className='product'>
      <Single {...singleProduct}/>
    </div>
  )
}

export default Product