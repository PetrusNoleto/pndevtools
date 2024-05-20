import Image from "next/image"
import Link from "next/link"

const ProjectBox = ()=>{
    return(
        <>
            <Link href={""} className="flex flex-col border w-72 h-80 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300">
                <div className="w-full h-32 bg-black rounded-t-lg">
                </div>
                <div className="relative p-3">
                    <div className="absolute -top-10 bg-white rounded-full flex justify-center items-center">
                        <div className="relative w-16 h-16">
                            <Image src ={"/app/brand.jpg"} alt = "" fill={true} className="rounded-full"/>
                        </div>
                    </div> 
                    <div className="relative flex flex-col gap-3 p-3 py-6">
                        <h3 className="text-lg font-medium">freeCodeCamp</h3>
                        <p className="text-xs font-light">freeCodeCamp.orgs open-source codebase and curriculum. Learn to code for free.</p>
                    </div>
                </div>
            </Link>
        </>
    )
}
export default ProjectBox