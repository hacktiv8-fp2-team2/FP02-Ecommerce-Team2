import React, { useState, useEffect } from "react";
import {
  fetchProducts,
  getAllProducts,
} from "../features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Atoms/Button";
import homepage from "../assets/images/Layer.png";
import { Link } from "react-router-dom";

const HomePages = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await dispatch(fetchProducts());
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <section className="px-14">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="max-w-md">
          <h1 className="text-4xl pb-2">Welcome To Our </h1>
          <h1 className="font-bold text-4xl pb-2">Lizidi Tikipidi World</h1>
          <p>
            Lizidi Tikipidi is the buying and selling of goods and services, or
            the transmitting of funds or data, over an electronic network,
            primarily the internet.
          </p>
        </div>
        <img src={homepage} alt="browsing"/>
      </div>
      <div className="flex flex-wrap gap-8 pt-20 mb-16">
        {isLoading ? (
          <p className="mx-auto p-10 text-gray-400">Loading...</p> // Render a loading state while fetching data
        ) : (
          products.map((product, index) => (
            <div
              key={index}
              className="w-[calc(27%_-_3rem)] px-5 pb-5 rounded-lg shadow-[3px_8px_12px_rgba(0,0,0,0.25)] text-center"
            >
              <img
                src={product.image}
                alt="product"
                className="h-[10rem] mx-auto bg-center bg-cover"
              />
              <h2 className="font-bold text-xl mt-5 line-clamp-2 hyphens-auto h-[3em]">{product.title}</h2>
              <p className="truncate text-gray-500 text-sm">{product.category}</p>
              <p className="mt-3 text-justify line-clamp-3">
                {product.description}
              </p>
              <div className="space-x-4 mt-7 flex flex-row">
                <Button type={"submit"} buttonPrimary>
                  <Link to="/product-detail">Detail</Link>
                </Button>
                <Button type={"button"} buttonPrimary>
                  Add to Cart
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default HomePages;
