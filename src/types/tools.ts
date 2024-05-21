export type toolsTypes = {
  toolid: number;
  toolName: string;
  toolDescription: string;
  toolAddress: string;
  toolPhotoLink: string;
  toolBoxColor:string;
  toolGitHubLink:string;
  toolTecnologies: toolsTecnologiesTypes[];
  toolLibrary: toolsLibraryTypes[];
  toolVerstion: string;
};

export type toolsTecnologiesTypes = {
    tecnologieId:number
    tecnologieName:string
};
export type toolsLibraryTypes = {
    libraryId:number
    libraryName:string
    libraryVersion:string
};