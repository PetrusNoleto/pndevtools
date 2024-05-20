import Image from "next/image"
import Link from "next/link"

const Header = ()=>{
    return(
        <header className="w-full flex justify-between h-[75px] items-center gap-3">
            <Link href={"/"} className="flex items-center gap-3">
                <div  className="relative w-16 h-16 flex justify-center items-center">
                    <Image src = {"/app/brand.webp"} alt={"image do app pndevtools"} fill={true}/>
                </div> 
                <div className="text-xl uppercase font-bold text-[#11111] drop-shadow-md">pndevtools</div>
            </Link>
            <div>
                <Link href={"https://github.com/PetrusNoleto/pndevtools"} target="_blank">
                    github
                </Link>
            </div>  
        </header>
    )
}
export default Header