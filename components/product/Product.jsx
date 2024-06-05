import "./product.css";
import { Link } from "react-router-dom";
const Product = ({ item }) => {
  return (
    <Link className="link" to={`/single/${item._id}`}>
      <div className="products">
        <h2 className="title_proudct">{item.title}</h2>
        <img src={item.image} className="product_image" alt="" />
        <span className="price">${item.price}</span>
        <p className="product_description">{item.description}</p>
      </div>
    </Link>
  );
};

export default Product;
