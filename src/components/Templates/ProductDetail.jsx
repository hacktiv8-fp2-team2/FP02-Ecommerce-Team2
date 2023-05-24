import { BackButton } from "../Atoms/BackButton";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../../features/products/productSlice";
import Button from "../Atoms/Button";
import stars from "../../assets/images/stars.png";
import bus from "../../assets/images/bus.png";
import vector from "../../assets/images/Vector.png";

export const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector(getAllProducts);
  const product = products.find((p) => p.id === Number(id));

  return (
    <section className="container flex-1 ml-14 mt-24 mb-11">
      <BackButton />
      <div className="flex flex-row">
        <img
          src={product?.image}
          alt="Product Detail Picture"
          className="w-[35em] h-[29em] shadow-[3px_8px_12px_rgba(0,0,0,0.25)]"
        ></img>
        <div className="flex flex-col ml-14">
          <h1 className="font-bold text-4xl mt-1 w-[14em]">{product?.title}</h1>
          <div className="flex flex-row items-end">
            <h1 className="font-bold text-sm mt-1">
              {product?.category} | {product?.rating?.count} reviews
            </h1>
          </div>
          <p className="font-extralight text-justify mt-12">
            {product?.description}
          </p>

          <hr className="my-4"></hr>
          <div className="flex flex-row justify-between">
            <p className="text-xl">
              $ <span className="font-extrabold">{product?.price}</span> / qty
            </p>
            <div className="flex flex-row space-x-3">
              <form>
                <input
                  type="number"
                  min={1}
                  placeholder="1"
                  className="w-[4em] text-center border border-neutral-900 rounded-md p-3"
                />
              </form>
              <Button type={"button"} buttonPrimary>
                Add to Cart
              </Button>
            </div>
          </div>
          <hr className="my-4"></hr>
          <div className="flex flex-row justify-center text-gray-600 space-x-4 text-sm">
            <div className="flex flex-row space-x-2">
              <img src={bus}></img>
              <p>Free Shipping</p>
            </div>
            <div className="flex flex-row space-x-1">
              <img src={vector}></img>
              <p>Cancel Anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
