import Avatar from "@/components/atoms/Avatar";
import Button from "@/components/atoms/Button";
import Header from "@/components/molecules/Header";
import Textfield from "@/components/molecules/Textfield";

const LoginPage = () => {
  return (
    <section className="w-full">
      <Header intent="labelWithCloseIcon" title={"로그인"} />
      <div className={"flex flex-col gap-10 p-4"}>
        <div className={"w-full flex justify-center items-center"}>
          <Avatar shape={"square"} size={"xl"} avatar="" />
        </div>
        <Textfield label="이메일" placeholder="이메일을 입력해주세요." />
        <Textfield label="비밀번호" placeholder="비밀번호를 입력해주세요." />
        <Button>로그인</Button>
      </div>
    </section>
  );
};

export default LoginPage;
