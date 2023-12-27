import './navbar.scss'
function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>ADMIN</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/untitled_design_-_2022-10-31t122306.087-sixteen_nine.png?VersionId=OqgLce4SB0vXbl8tLYwDJff5rN5xUJd3&size=690:388" alt="" />
          <span>Uncle</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar