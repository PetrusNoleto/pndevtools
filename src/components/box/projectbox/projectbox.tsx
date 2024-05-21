import Image from "next/image"
import Link from "next/link"
import React from "react"

interface projectBoxProps{
    projectBoxColor:string
    projectBoxImage:string
    projectBoxName:string
    projectBoxDescription:string
}


const ProjectBox:React.FC<projectBoxProps> = ({projectBoxColor,projectBoxImage,projectBoxName,projectBoxDescription})=>{
    return(    
        
            <Link href={`/tools/${projectBoxName}`} className=" flex flex-col border lg:w-72 h-80 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300">
                <div style={{ backgroundColor: projectBoxColor }} className={`w-full h-32  rounded-t-lg `}>
                </div>
                <div className="relative p-3">
                    <div className="absolute -top-10 bg-white rounded-full flex justify-center items-center">
                        <div className="relative w-16 h-16">
                            <Image src ={projectBoxImage} alt = {`imagem da ferramenta ${projectBoxName}`} fill={true} className="rounded-full"/>
                        </div>
                    </div> 
                    <div className="relative flex flex-col gap-3 p-3 py-6">
                        <h3 className="text-lg font-medium">{projectBoxName}</h3>
                        <p className="text-xs font-light">{projectBoxDescription}</p>
                    </div>
                </div>
            </Link>
    )
}
export default ProjectBox