import Button from "../Atoms/Button";
import { BackButton } from "../Atoms/BackButton";
import stars from "../../assets/images/stars.png";
import bus from "../../assets/images/bus.png";
import vector from "../../assets/images/Vector.png";

export const ProductDetail = () => {
  return (
    <section className="container flex-1 ml-14 mt-24 mb-11">
      <BackButton />
      <div className="flex flex-row">
        <img
          src="http://3.bp.blogspot.com/-Fq5YO2DpkMg/Uykx23LCjVI/AAAAAAAAAPc/Hkpdyt13bOI/s1600/cara+membuat+kopi.jpg"
          alt="Product Detail Picture"
          className="w-[35em] h-[29em] shadow-[3px_8px_12px_rgba(0,0,0,0.25)]"
        ></img>
        <div className="flex flex-col ml-14">
          <h1 className="font-bold text-4xl mt-1 w-[14em]">Coffee Bundle</h1>
          <div className="flex flex-row items-end">
            <img src={stars} className="w-[5em] h-[1.2em] mt-2 ml-1"></img>
            <h1 className="font-bold text-sm ml-3">246 reviews</h1>
          </div>
          <p className="font-extralight text-justify mt-12">
            Traditionally, bundles include a range of different products from
            one brand. These items are then packaged and sold together. From a
            consumer’s perspective, bundles allow them to purchase a ready-made
            gift at a fraction of the time, and often, at a lower cost
          </p>
          <h3 className="font-bold mt-7 mb-2">Size</h3>
          <div className="flex flex-row space-x-1">
            <Button type={"button"} buttonSecondary>
              Small
            </Button>
            <Button type={"button"} buttonPrimary>
              Medium
            </Button>
            <Button type={"button"} buttonSecondary>
              Big
            </Button>
          </div>
          <hr className="my-4"></hr>
          <div className="flex flex-row justify-between">
            <p className="text-xl">
              Rp <span className="font-extrabold">2.500</span> / qty
            </p>
            <div className="flex flex-row space-x-3">
              <form>
                <input
                  type="number"
                  min={1}
                  placeholder="1"
                  className="w-[3.5em] text-center border border-neutral-900 rounded-md p-3"
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
