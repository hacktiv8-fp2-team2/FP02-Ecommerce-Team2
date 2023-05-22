import React from "react";
import { BackButton } from "../components/Atoms/BackButton";
import Button from "../components/Atoms/Button";
import applePay from "../assets/images/applepay.png";
import googlePay from "../assets/images/googlepay.png";
import amazon from "../assets/images/amazon.png";
import affirm from "../assets/images/affirm.png";
import shopeePay from "../assets/images/shopeepay.png";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <section className="mt-24 ml-14 mb-11">
      <BackButton />
      <div className="flex flex-wrap gap-2">
       <img src="http://3.bp.blogspot.com/-Fq5YO2DpkMg/Uykx23LCjVI/AAAAAAAAAPc/Hkpdyt13bOI/s1600/cara+membuat+kopi.jpg" alt="Product Detail Picture" className="w-[16em] h-[13em] shadow-[3px_8px_12px_rgba(0,0,0,0.25)]"></img>
          <div className="flex flex-col ml-10 mr-10 mb-10">
            <h1 className="font-bold text-3xl truncate w-[8.5em]">Coffee Bundle</h1>
            <button className="btn btn-sm w-[10em] btn-primary px-0 text-xs text-white mt-3">Size : medium</button>
            <p className="mt-6 text-xl">Rp <span className="font-extrabold">2.500</span></p>
            <div className="flex flex-row mt-5 space-x-3">
              <Button type={"button"} buttonSecondary>
                -
              </Button>
              <Button type={"button"} buttonSecondary>
                1
              </Button>
              <Button type={"button"} buttonSecondary>
                +
              </Button>
            </div>
          </div>

          <img src="http://3.bp.blogspot.com/-Fq5YO2DpkMg/Uykx23LCjVI/AAAAAAAAAPc/Hkpdyt13bOI/s1600/cara+membuat+kopi.jpg" alt="Product Detail Picture" className="w-[16em] h-[13em] shadow-[3px_8px_12px_rgba(0,0,0,0.25)]"></img>
          <div className="flex flex-col ml-10">
            <h1 className="font-bold text-3xl truncate w-[8.5em]">Coffee Bundle</h1>
            <button className="btn btn-sm w-[10em] btn-primary px-0 text-xs text-white mt-3">Size : medium</button>
            <p className="mt-6 text-xl">Rp <span className="font-extrabold">2.500</span></p>
            <div className="flex flex-row mt-5 space-x-3">
              <Button type={"button"} buttonSecondary>
                -
              </Button>
              <Button type={"button"} buttonSecondary>
                1
              </Button>
              <Button type={"button"} buttonSecondary>
                +
              </Button>
            </div>
          </div>

          <img src="http://3.bp.blogspot.com/-Fq5YO2DpkMg/Uykx23LCjVI/AAAAAAAAAPc/Hkpdyt13bOI/s1600/cara+membuat+kopi.jpg" alt="Product Detail Picture" className="w-[16em] h-[13em] shadow-[3px_8px_12px_rgba(0,0,0,0.25)]"></img>
          <div className="flex flex-col ml-10">
            <h1 className="font-bold text-3xl truncate w-[8.5em]">Coffee Bundlsdsde</h1>
            <button className="btn btn-sm w-[10em] btn-primary px-0 text-xs text-white mt-3">Size : medium</button>
            <p className="mt-6 text-xl">Rp <span className="font-extrabold">2.500</span></p>
            <div className="flex flex-row mt-5 space-x-3">
              <Button type={"button"} buttonSecondary>
                -
              </Button>
              <Button type={"button"} buttonSecondary>
                1
              </Button>
              <Button type={"button"} buttonSecondary>
                +
              </Button>
            </div>
          </div>
      </div>
      <div className="mx-auto mt-20 w-[30em] border-none rounded-md p-7 shadow-[3px_8px_12px_rgba(0,0,0,0.25)]">
        <div className="flex flex-row justify-between mb-3">
          <p>Good and services</p>
          <p className="font-bold">Rp 16.100</p>
        </div>
        <div className="flex flex-row justify-between mb-5">
          <p>Tax</p>
          <p className="font-bold">Rp 80.000</p>
        </div>
        <Button type={"button"} buttonPrimary isFullWidth>Checkout &#8739; <span className="font-light ml-2 tracking-widest">Rp 96.100</span></Button>
        <div className="flex flex-row justify-center mt-2">
          <Link to="https://www.apple.com/apple-pay/" target="_blank"><img src={applePay}></img></Link>
          <Link to="https://play.google.com/store/games?device=windows&pli=1" target="_blank"><img src={googlePay}></img></Link>
          <Link to="https://www.amazon.com/" target="_blank"><img src={amazon}></img></Link>
          <Link to="https://www.affirm.com/" target="_blank"><img src={affirm}></img></Link>
          <Link to="https://www.shopeepay.co.id/" target="_blank"><img src={shopeePay}></img></Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
