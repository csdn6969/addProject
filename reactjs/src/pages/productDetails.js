import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../services/Api";
import getImagesProducts from "../ultils";
const ProductDetails =()=>{
  const params = useParams();
  const id = params.id
  const [product, setProduct] = React.useState({});
  useEffect(()=>{
    getProduct( id,{}).then(({data})=>{
      console.log(data);
      return setProduct(data.data)
    })
  },[id])
    return(
        <>
           <div id="Products-details">
  <div className="container">
    <div className="row">
      <div className="details col-xl-6 col-lg-6 col-12">
        <div className="product">
          <div className="large">
            <img src={getImagesProducts(product?.image)}/>
          </div>
        </div>
        <div className="banner-details col-12">
          <img src="images/banner2.png" />
        </div>
        <div className="text-details">
          <img src="images/award.png" alt />
          <p> Nhập trực tiếp từ các nhà phân phối Apple chính hãng tại Việt Nam: Synnex FPT, Digiworld, Dầu khí (Petrosetco), Viettel.</p>
        </div>
        <div className="text-details">
          <img src="images/logo-check.png" alt />
          <p> Bảo hành tại trung tâm Apple VN</p>
        </div>
        <div className="sales-policy">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-12" style={{display: 'flex'}}>
              <img style={{paddingRight: 10, width: 36, height: 36}} src="images/check (1).png" alt />
              <p>Bảo hành 12 tháng chính hãng Apple tại Việt Nam</p>
            </div>
            <div className="col-xl-6 col-lg-6 col-12" style={{display: 'flex'}}>
              <img style={{paddingRight: 10, width: 36, height: 30}} src="images/icons8-in-transit-24.png" alt />
              <p>Giao hàng miễn phí nội thành TP.HCM</p>
            </div>
            <div className="col-xl-6 col-lg-6 col-12" style={{display: 'flex'}}>
              <img style={{paddingRight: 10, width: 36, height: 36}} src="images/box (1).png" alt />
              <p>Bộ sản phẩm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C
              </p>
            </div>
            <div className="col-xl-6 col-lg-6 col-12" style={{display: 'flex'}}>
              <img style={{paddingRight: 10, height: 42, width: 38}} src="images/icons8-debit-card-50.png" alt />
              <p>Trả trước 30% qua Home Credit. Thủ tục chỉ cần CMND + GPLX;
                Hoặc trả góp lãi suất 0% qua thẻ tín dụng Visa, Master, JCB.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="buy-addCart col-xl-6 col-lg-6 col-12">
        <div className="name-product-details">
          <h2>iphone 14 pro max 128gb chinh hang</h2>
          <div>Trả góp 0%</div>
        </div>
        <div className="price-product-details">
          <div className="real-price">
            <h3>30.000.000đ</h3>
            <div><span>-10%</span><del>3.000.000đ</del></div>
          </div>
          <div className="installment-price">
            <div>Chỉ cần trả trước:</div>
            <p>9.000.000đ</p>
          </div>
        </div>
        <div className="option-price">
          <button className="option-item">128gb <br /> 27.000.000d</button>
          <button className="option-item">128gb <br /> 27.000.000d</button>
          <button className="option-item">128gb <br /> 27.000.000d</button>
          <button className="option-item">128gb <br /> 27.000.000d</button>
        </div>
        <div className="details-promotion">
          <div className="promotion-title">Khuyến mãi</div>
          <div className="promotion-item"><span><i className="fa-solid fa-check" /></span>Tặng thêm PMH 150.000đ mua Bộ Quà Tặng VIP.</div>
          <div className="promotion-item"><span><i className="fa-solid fa-check" /></span>Giảm thêm 1 triệu khi thu cũ lên đời</div>
          <div className="promotion-item"><span><i className="fa-solid fa-check" /></span>Trả góp 0% lãi suất qua thẻ tín dụng</div>
          <div className="promotion-item"><span><i className="fa-solid fa-check" /></span>[Từ 01 - 31/12] Tặng thêm PMH 200.000đ</div>
          <div className="promotion-item"><span><i className="fa-solid fa-check" /></span>[Từ 26/12 - 18/01] Cơ hội trúng chỉ Vàng 9999 khi mua điện thoại</div>
          <div className="promotion-item"><span><i className="fa-solid fa-check" /></span>[Từ nay đến 31/12] Ưu đãi cực sốc khi mua phiên bản Deep Purple (Tím):
            Thu cũ lên đời chỉ 30.590.000đ *Số lượng có hạn
            Tặng thêm Bảo hành 2 năm chính hãng Apple</div>
        </div>
        <div className="buy-now"><button>Mua ngay</button></div>
        <div className="add-to-card"><button>Thêm vào giỏ hàng</button></div>
      </div>
    </div>
    <div className="comment col-xl-8 col-lg-8 col-12">
      <div className="main-comment">
        <h3>GỬI ĐÁNH GIÁ CỦA BẠN</h3>
        <div className="info-user">
          <form method="post">
            <div className="form-group">
              <label htmlFor>Họ và tên:</label>
              <input type="text" name="name" id />
            </div>
            <div className="form-group">
              <label htmlFor>Email:</label>
              <input type="text" name="email" id />
            </div>
            <div className="form-group">
              <label htmlFor>Số điện thoại</label>
              <input type="text" name="phone" id />
            </div>
            <div className="form-group">
              <label htmlFor>Nội dung:</label>
              <textarea name="content" defaultValue={""} />
            </div>
            <button>Gửi bình luận</button>
          </form>
          <div className="comment-list">
            <div className="comment-item">
              <ul>
                <li>Phạm Anh Đức</li>
                <li>00:33 01/01/2023</li>
                <li>Tại thờI điểm này là ngày đầu tiên của năm 2023. Chúc một năm mớI tốt lành</li>
              </ul>
              <ul>
                <li>Phạm Anh Đức</li>
                <li>00:33 01/01/2023</li>
                <li>Tại thờI điểm này là ngày đầu tiên của năm 2023. Chúc một năm mớI tốt lành</li>
              </ul>
              <ul>
                <li>Phạm Anh Đức</li>
                <li>00:33 01/01/2023</li>
                <li>Tại thờI điểm này là ngày đầu tiên của năm 2023. Chúc một năm mớI tốt lành</li>
              </ul>
              <ul>
                <li>Phạm Anh Đức</li>
                <li>00:33 01/01/2023</li>
                <li>Tại thờI điểm này là ngày đầu tiên của năm 2023. Chúc một năm mớI tốt lành</li>
              </ul>
              <ul>
                <li>Phạm Anh Đức</li>
                <li>00:33 01/01/2023</li>
                <li>Tại thờI điểm này là ngày đầu tiên của năm 2023. Chúc một năm mớI tốt lành</li>
              </ul>
              <ul>
                <li>Phạm Anh Đức</li>
                <li>00:33 01/01/2023</li>
                <li>Tại thờI điểm này là ngày đầu tiên của năm 2023. Chúc một năm mớI tốt lành</li>
              </ul>
              <ul>
                <li>Phạm Anh Đức</li>
                <li>00:33 01/01/2023</li>
                <li>Tại thờI điểm này là ngày đầu tiên của năm 2023. Chúc một năm mớI tốt lành</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
        </>
    )
}
export default ProductDetails