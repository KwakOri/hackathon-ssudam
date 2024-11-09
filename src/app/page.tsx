import SVGIcon from "@/components/atoms/SVGIcon";
import InputSelectBox from "@/components/molecules/SelectInputBox";

export default function Home() {
  return (
    <main className=" w-screen h-screen bg-line-normal ">
      <SVGIcon icon={"ArrowDown"} />
      <InputSelectBox />
    </main>
  );
}
