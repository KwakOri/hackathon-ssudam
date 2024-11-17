import Page from "@/components/Layouts/Page";
import api from "@/services/service";

const ChatPage = async () => {
  const prevChats = await api.counseling.getPrevChats();
  console.log(prevChats);

  return <Page>Hello</Page>;
};

export default ChatPage;
