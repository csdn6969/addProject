import React from "react";

const Header = ({item}) => {
    const menu = document.querySelector('.menu');
    const showMenu = ()=>{
        menu.classList.toggle('hide')
    }
    return(
      <div>
  <div id="header-area">
    <div className="container">
      <div className="row">
        <nav className="info-shop col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="row">
            <div className="number-phone">
              <div className="phone-icon"><i className="fa fa-phone" /></div>
              <div className="phone"><a href="#">HN: 0123465755<br />HCM: 012345653</a></div>
            </div>
            <div className="check-in">
              <div className="check-icon"><img src="images/352521_location_on_icon (1).png" alt /></div>
              <div className="address-shop">Hàng có sẵn tại HN_HCM <br /> <span>Kiểm tra trước khi thanh toán</span></div>
            </div>
          </div>
        </nav>
        <header className="header-main col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="row">
            <div className="logo"><img src="images/low-res-logo (3).png" alt="logo" /></div>
            <div className="search">
              <input type="text" placeholder="Nhập từ khóa tìm kiếm" />
              <i className="icon-search fa fa-magnifying-glass" />
            </div>
            <div className="cart">
              <div className="icon-cart">
                <div className="row">
                  <div> <i className=" fa fa-cart-shopping" /></div>
                  <div className="menu-toggle" onClick={showMenu}><i className="fa fa-bars" /></div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  </div>
  <div className="menu">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ul className="menu-relative">
          {
            item.map((value, index)=>{
              return(
              <li className="menu-item"><a href="#">{value.name}</a></li>
              )
            })
          }
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
export default Header