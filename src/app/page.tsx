import Avatar from "@/components/atoms/Avatar";
import SVGIcon from "@/components/atoms/SVGIcon";
import Header from "@/components/molecules/Header/Header";

export default function Home() {
  return (
    <main className=" w-screen h-screen bg-line-normal">
      <h1 className="text-common-100 text-title1">hello</h1>
      <SVGIcon icon="Setting" color="gray" size={24} />
      <Avatar shape={"square"} size={"xl"} />
      <Header intent="main" title="AI" />
    </main>
  );
}
