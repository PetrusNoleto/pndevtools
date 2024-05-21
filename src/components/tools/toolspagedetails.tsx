"use client";

import { getPageName } from "@/functions/getPageName";
import { tools } from "@/staticdata/tools";
import { toolsLibraryTypes, toolsTecnologiesTypes, toolsTypes } from "@/types/tools";
import PageWraper from "../wraper/pagewraper";
import Header from "../header/header";
import Image from "next/image";
import { useEffect, useState } from "react";

const ToolsPageDetails = () => {
  let allToolsList = [];
  let allToolsListTecnologies = [];
  let allToolsListLibrary = [];
  allToolsList = tools as [];
  const pagename = getPageName();
  const [toolList, setToolList] = useState<toolsTypes[] | []>([]);
  const [toolImageUrl, setToolImageUrl] = useState("");
  const findToolData = toolList.find((tool) => tool.toolName === pagename);
  allToolsListTecnologies = findToolData?.toolTecnologies as [];
  allToolsListLibrary = findToolData?.toolLibrary as [];
  const [toolTecnologiesList, setToolTecnologiesList] = useState<toolsTecnologiesTypes[] | []>([]);
  const [toolLibraryList, setToolLibraryList] = useState<toolsLibraryTypes[] | []>([]);
  const [toolUrl, setToolUrl] = useState("");
  const [toolGitHubUrl, setToolGitHubUrl] = useState("");

  useEffect(() => {
    setToolList(allToolsList);
    setToolImageUrl(findToolData?.toolPhotoLink as string);
    setToolTecnologiesList(allToolsListTecnologies);
    setToolLibraryList(allToolsListLibrary);
    setToolUrl(findToolData?.toolAddress as string);
    setToolGitHubUrl(findToolData?.toolGitHubLink as string)
  },[toolList,toolImageUrl,toolTecnologiesList,toolUrl,toolLibraryList,toolGitHubUrl]);

  return (
    <div className="w-full h-full flex justify-center">
      <PageWraper>
        <Header />
        <main className="py-6">
          <section className="">
            <div
              style={{ backgroundColor: findToolData?.toolBoxColor }}
              className={`lg:w-full h-72  rounded-t-lg `}
            ></div>
           <div className="flex justify-between items-center p-3 ">
            <div className="relative ">
                <div className="absolute -top-16 bg-white rounded-full flex justify-center items-center drop-shadow-lg">
                    <div className="relative w-32 h-32">
                    <Image
                        src={toolImageUrl}
                        alt={`imagem da ferramenta ${"projectBoxName"}`}
                        fill={true}
                        className="rounded-full"
                    />
                    </div>
                </div>
                <div className="relative flex flex-col gap-3 p-3 pt-16">
                    <h3 className="text-3xl font-bold capitalize">
                    {findToolData?.toolName}
                    </h3>
                    <p className="text-sm font-normal">
                    {findToolData?.toolDescription}
                    </p>
                </div>
            </div>
            <div className="flex gap-3">
                <a href={toolUrl} className="p-3 border rounded-lg text-sm" target="_blank">website</a>
                <a href={toolGitHubUrl} className="p-3 border rounded-lg text-sm" target="_blank">github</a>
            </div>
           
           </div>
          </section>
          <section className="px-6">
            <div className="py-3">
              <h2 className="font-bold text-xl">tecnologias &amp; frameworks</h2>
            </div>
            <ul className="px-6 list-disc">
              {toolTecnologiesList !== undefined ? (
                <>
                  {toolTecnologiesList.length >= 1 ? (
                    <>
                      {toolTecnologiesList.map((tecnologie) => {
                        return (
                          <li className="" key={tecnologie.tecnologieId}>
                            <span className="text-sm">{tecnologie.tecnologieName}</span>
                          </li>
                        );
                      })}
                    </>
                  ) : (
                    <>nenhuma tecnologia encontrada</>
                  )}
                </>
              ) : (
                <></>
              )}
            </ul>
          </section>
          <section className="px-6">
            <div className="py-3">
              <h2 className="font-bold text-xl">bibliotecas</h2>
            </div>
            <ul className="px-6 list-disc">
              {toolLibraryList !== undefined ? (
                <>
                  {toolLibraryList.length >= 1 ? (
                    <>
                      {toolLibraryList.map((library) => {
                        return (
                          <li className="" key={library.libraryId}>
                            <span className="text-sm">{library.libraryName}</span>
                          </li>
                        );
                      })}
                    </>
                  ) : (
                    <>nenhuma biblioteca encontrada</>
                  )}
                </>
              ) : (
                <></>
              )}
            </ul>
          </section>    
        </main>
      </PageWraper>
    </div>
  );
};
export default ToolsPageDetails;
