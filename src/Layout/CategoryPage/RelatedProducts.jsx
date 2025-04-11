import { useState } from "react";
import SlidingButton from "../../Components/Buttons/SlidingButton";
import ProductCard from "../../Components/Cards/ProductCard";
import { golds } from "../../constants/products";

export default function RelatedProducts(){

    const [scrollPosition,setScrollPosition] = useState(200)


    const handleScrolling = (position)=>{

        const scrollingDiv = document.getElementById('scrolling-div')
        if(position=='right'){
            scrollingDiv.scrollTo({
                left: scrollPosition, // pixels from the left
                behavior: 'smooth' // makes it smooth
              });
              setScrollPosition(scrollPosition+200)
        }else{
            scrollingDiv.scrollTo({
                left: -scrollPosition, // pixels from the left
                behavior: 'smooth' // makes it smooth
              });
              setScrollPosition(scrollPosition-200)

        }
        const isAtEnd = scrollingDiv.scrollLeft + scrollingDiv.clientWidth >= scrollingDiv.scrollWidth - 1;

        console.log(isAtEnd);
        if(isAtEnd){
            setScrollPosition(200)
        }
        
    }

    return(
        <>
       <div className="mt-[43px] text-center lg:w-[70%] w-[88%] mx-auto relative mb-[117px] overflow-hidden">
  <h1 className="text-[25px] bolkit font-bold">Related Products</h1>

  <div className="absolute right-0">
    <SlidingButton handleScrolling={handleScrolling} />
  </div>

  <div id="scrolling-div" className="mt-[70px] overflow-x-auto scrollbar-hidden">
    <div className="w-max flex gap-[21px]">
      {golds?.map((item, i) => {
        if (i < 4) {
          return <ProductCard key={i} item={item} />;
        }
      })}
    </div>
  </div>
</div>


        </>
    )
}