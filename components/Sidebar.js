import Link from "next/link"

const Sidebar = () => (
  <div className="az-sidebar">
    <div className="az-sidebar-header">
      <a href="/" className="az-logo"><img style={{width: "80px"}} src="/static/img/ewh-logo.jpg" alt="logo"/></a>
    </div>
    
    <div className="az-sidebar-loggedin">
      <div className="az-img-user online">
        <img src="https://via.placeholder.com/500" alt="" />
      </div>
      <div className="media-body">
        <h6>EWH Pechon</h6>
        <span>Premium Member</span>
      </div>
    
    </div>
    
    <div className="az-sidebar-body">
      <ul className="nav">
        <li className="nav-label">Main Menu</li>
        <li className="nav-item active show">
          <Link href="">
            <a className="nav-link with-sub">
            <i className="typcn typcn-clipboard"/>Member</a>
          </Link>
          <ul className="nav-sub">
            <li className="nav-sub-item">
              <Link href="/"><a className="nav-sub-link">Home</a></Link>
            </li>
            <li className="nav-sub-item">
              <Link href="/Event"><a className="nav-sub-link">Event</a></Link>
            </li>
            <li className="nav-sub-item">
              <Link href="/AdCampaign">
               <a className="nav-sub-link">Ad Campaign</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item show">
          <Link href="">
            <a className="nav-link with-sub">
              <i className="typcn typcn-clipboard"/>Center</a>
          </Link>
          <ul className="nav-sub">
            <li className="nav-sub-item">
              <Link href="/"><a className="nav-sub-link">Center Home</a></Link>
            </li>
            <li className="nav-sub-item">
              <Link href="/Event"><a className="nav-sub-link">Center Event</a></Link>
            </li>
            <li className="nav-sub-item">
              <Link href="/AdCampaign">
                <a className="nav-sub-link">Ad Campaign</a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  
  </div>
)

export default Sidebar
