"use client";

import { useEffect, useState } from "react";
import ProjectBox from "../box/projectbox/projectbox";
import Header from "../header/header";
import PageWraper from "../wraper/pagewraper";
import { tools } from "@/staticdata/tools";
import { toolsTypes } from "@/types/tools";

const HomepageComponent = () => {
  let allToolsList = [];
  allToolsList = tools as [];
  const [toolsList, setToolsList] = useState<toolsTypes[] | []>([]);
    useEffect(()=>{
        setToolsList(allToolsList)
    },[toolsList])
  return (
    <div className="w-full h-full flex justify-center">
      <PageWraper>
        <Header />
        <main className="">
          <div className="flex flex-col gap-6 items-center py-20 px-1">
            <h1 className="text-4xl lg:text-6xl first-letter:capitalize font-semibold text-center drop-shadow-lg select-none ">
              ferramentas open-source <br />
              para seu software
            </h1>
            <h2 className="text-sm  lg:text-xl select-none font-light">
              Descubra ferramentas que facilitarão <br /> o desenvolvimento dos
              seus projetos
            </h2>
            {/* 
            <input
              type="text"
              placeholder="procurar ferramenta"
              className="text-xs w-[480px] border p-3 rounded-lg focus:drop-shadow-lg outline-none focus:border-black transition-all duration-300"
            />
            */}
          </div>
          <div className="w-full flex justify-center">
            {toolsList.length > 0 ? (
              <>
                  <ul className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 p-3"> 
                  {toolsList.map(tools=>{
                   return(
                    <li key={tools.toolid}>
                        <ProjectBox  projectBoxName={tools.toolName} projectBoxColor={tools?.toolBoxColor} projectBoxDescription={tools.toolDescription} projectBoxImage={tools.toolPhotoLink} />
                    </li>
                   )
                  })}
                  </ul>      
              </>
            ) : (
              <div className="w-full text-center p-3">
                <p>nenhuma ferramenta encontrada</p>
              </div>
            )}
          </div>
        </main>
      </PageWraper>
    </div>
  );
};
export default HomepageComponent;
