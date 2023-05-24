import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Atoms/Button";

const Recap = () => {
  return (
    <section className="mt-24 ml-14 mb-11">
        <div className="max-w-[35px] max-h-[50px] p-1 rounded-full shadow-[3px_8px_12px_rgba(0,0,0,0.25)] text-center mb-11">
            <Link to="/admin"><i className="fa-solid fa-arrow-left fa-beat"></i></Link>
        </div>
      <div className="flex flex-wrap gap-2">
        <img src="http://3.bp.blogspot.com/-Fq5YO2DpkMg/Uykx23LCjVI/AAAAAAAAAPc/Hkpdyt13bOI/s1600/cara+membuat+kopi.jpg" alt="Product Detail Picture" className="w-[16em] h-[13em] shadow-[3px_8px_12px_rgba(0,0,0,0.25)]"></img>
          <div className="flex flex-col ml-10 mr-5 mb-10">
            <h1 className="font-bold text-3xl truncate w-[8.5em] mt-4">Coffee Bundle</h1>
            <button className="btn btn-sm w-[10em] btn-primary px-0 text-xs text-white mt-3">Sold : 2330</button>
            <p className="mt-6 text-xl">Rp <span className="font-extrabold">2.500</span></p>
            <div className="flex flex-row mt-5">
                <p>T O T A L <span className="ml-7 font-bold">Rp 5.825.000</span></p>
            </div>
          </div>
        
          <img src="http://3.bp.blogspot.com/-Fq5YO2DpkMg/Uykx23LCjVI/AAAAAAAAAPc/Hkpdyt13bOI/s1600/cara+membuat+kopi.jpg" alt="Product Detail Picture" className="w-[16em] h-[13em] shadow-[3px_8px_12px_rgba(0,0,0,0.25)]"></img>
          <div className="flex flex-col ml-10 mr-10 mb-10">
            <h1 className="font-bold text-3xl truncate w-[8.5em] mt-4">Coffee Bundle</h1>
            <button className="btn btn-sm w-[10em] btn-primary px-0 text-xs text-white mt-3">Sold : 2330</button>
            <p className="mt-6 text-xl">Rp <span className="font-extrabold">2.500</span></p>
            <div className="flex flex-row mt-5">
                <p>T O T A L <span className="ml-7 font-bold">Rp 5.825.000</span></p>
            </div>
          </div>

          <img src="http://3.bp.blogspot.com/-Fq5YO2DpkMg/Uykx23LCjVI/AAAAAAAAAPc/Hkpdyt13bOI/s1600/cara+membuat+kopi.jpg" alt="Product Detail Picture" className="w-[16em] h-[13em] shadow-[3px_8px_12px_rgba(0,0,0,0.25)]"></img>
          <div className="flex flex-col ml-10 mr-10 mb-10">
            <h1 className="font-bold text-3xl truncate w-[8.5em] mt-4">Coffee Bundle</h1>
            <button className="btn btn-sm w-[10em] btn-primary px-0 text-xs text-white mt-3">Sold : 2330</button>
            <p className="mt-6 text-xl">Rp <span className="font-extrabold">2.500</span></p>
            <div className="flex flex-row mt-5">
                <p>T O T A L <span className="ml-7 font-bold">Rp 5.825.000</span></p>
            </div>
          </div>


      </div>
      <div className="mx-auto mt-20 w-[30em] border-none rounded-md p-7 shadow-[3px_8px_12px_rgba(0,0,0,0.25)]">
        <div className="flex flex-row justify-around text-md tracking-widest mb-3">
          <p>Total income</p>
          <p>&#8739;</p>
          <p className="font-bold">Rp 16.100</p>
        </div>
      </div>
    </section>
  );
};

export default Recap;
