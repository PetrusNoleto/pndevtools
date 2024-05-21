import { childrentype } from "@/types/default"
import React from "react"

const PageWraper:React.FC<childrentype> = ({children})=>{
    return( 
        <div className="w-[480px] lg:w-[1024px] h-auto" >
            {children}
        </div>
    )
}
export default PageWraper