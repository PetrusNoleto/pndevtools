import HomepageComponent from "@/components/homepage/homepagecompoent";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "pndevtool - homepage",
  description: "listagem de ferramentas para desenvolvimento de software",
};



export default function Home() {
  return (
    <>
      <HomepageComponent/>
    </>
  );
}
