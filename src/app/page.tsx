import Button from "@/components/atoms/Button";

export default function Home() {
  return (
    <main className=" bg-white w-screen h-screen bg-line-normal flex justify-center items-center">
      <Button intent={"redFill"} size={"xl"}>
        I'm Button
      </Button>
    </main>
  );
}
