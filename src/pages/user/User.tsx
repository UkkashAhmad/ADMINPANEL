import Single from '../../Components/single/Single'
import { singleUser } from '../../data'
import './user.scss'
function User() {
  return (
    <div className='user'>
      <Single {...singleUser}/>
    </div>
  )
}

export default User