
import LoadMoreButton from "../../Components/Buttons/LoadMoreButton";
import CategoryList from "../../Components/CategoryList/CategoryList";
import SecondarySearch from "../../Components/Inputs/SecondarySearch";
import { womensCategory } from "../../constants/category";
import { golds } from "../../constants/products";
import CategoryAboutSection from "../../Layout/CategoryPage/CategoryAboutSection";
import CategoryHeader from "../../Layout/CategoryPage/CategoryHeader";
import CategoryProductsListing from "../../Layout/CategoryPage/CategoryProductsListing";
import RelatedProducts from "../../Layout/CategoryPage/RelatedProducts";


export default function Categories() {
    return (
        <>

            <CategoryHeader />
            <SecondarySearch />

            <div className="mt-[40px]">
                <CategoryList />
            </div>

            <CategoryProductsListing list={golds} />
            <LoadMoreButton />
            <CategoryAboutSection details={womensCategory} />
            <RelatedProducts />


        </>
    )
}


