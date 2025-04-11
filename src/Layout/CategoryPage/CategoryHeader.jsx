import { useNavigate } from "react-router-dom";
import CategoryTab from "../../Components/Tabs/CategoryTab";

export default function CategoryHeader() {

    const navigate = useNavigate()

    return (
        <>
            <div className="w-[80%] mx-auto h-[60px] mt-[69px] flex justify-between">
                <img onClick={()=>{
                    
                    navigate('/')
                }} className="h-fit cursor-pointer" src='/assets/Images/logo/logo.png' ></img>
                <div className='w-[60px] rounded-full'>
                    <img className="w-full h-full rounded-full object-cover" src='/assets/Images/category/kid.png'></img>
                </div>
            </div>
            <div className='mt-[101px] h-[341px] bg-[#5B0100] rounded-[20px] justify-center flex relative'>
                <div className="w-fit h-full relative">
                    <img className="h-full" src="/public/assets/Videos/womenheader-gif.gif" ></img>
                    <div className="w-full h-full absolute top-0 bg-[linear-gradient(to_right,_#5B0100_0%,_#ffffff00_20%,_#ffffff00_70%,_#5B0100_100%)]"></div>
                </div>


                <div className="w-fit h-[243px] absolute top-[236px] flex gap-[23px] items-center">

                    
                    <CategoryTab isSelected={false} image={'/assets/Images/category/women.png'} />
                    <CategoryTab isSelected={true} image={'/assets/Images/category/kid.png'} />
                    <CategoryTab isSelected={false} image={'/assets/Images/category/women.png'} />
                    

                </div>


            </div>
        </>
    )
}