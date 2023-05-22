import Button from "../Atoms/Button";

export const ProductDetail = () => {
    return(
        <section className="container mx-auto mb-5">
            <div className="max-w-[35px] max-h-[50px] p-1 rounded-full shadow-[3px_8px_12px_rgba(0,0,0,0.25)] text-center">
                <i className="fa-solid fa-arrow-left fa-beat"></i>
            </div>
            <div className="flex flex-row">
                <img src="http://3.bp.blogspot.com/-Fq5YO2DpkMg/Uykx23LCjVI/AAAAAAAAAPc/Hkpdyt13bOI/s1600/cara+membuat+kopi.jpg" alt="Product Detail Picture" className="w-[15em] h-[15em]"></img>
                <h1>Coffee Bundle</h1>
            </div>
        </section>
    );
}