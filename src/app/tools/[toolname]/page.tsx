import ToolsPageDetails from "@/components/tools/toolspagedetails"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `pndevtool - tools details`,
    description: "listagem de ferramentas para desenvolvimento de software",
};


export default function ToolPageDetails (){  
    return(
        <>
          <ToolsPageDetails/>  
        </>
    )
}

