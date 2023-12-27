import Single from '../../Components/single/Single'
import './product.scss'
function Product() {

  // fetch data and send to single component
  return (
    <div className='product'>
      <Single/>
    </div>
  )
}

export default Product