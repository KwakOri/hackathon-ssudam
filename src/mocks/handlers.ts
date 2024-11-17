import { BASE_URL } from "@/services/service";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/", () => {
    return HttpResponse.json({ message: "This is the root endpoint" });
  }),

  http.get(`${BASE_URL}/user`, () => {
    return HttpResponse.json({
      id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
      firstName: "John",
      lastName: "Maverick",
    });
  }),
  http.get(`${BASE_URL}/auth/check-email`, ({ request }) => {
    const url = new URL(request.url);
    const email = url.searchParams.get("email");

    if (!email) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json({ message: "사용가능한 이메일입니다." });
  }),

  http.get(`${BASE_URL}/chat/prev-chats`, () => {
    return HttpResponse.json([
      {
        id: 83,
        userId: 2,
        message: "부산에 사는데 지원금 정보 좀 알려줘",
        sender: "user",
        messageType: "normal",
        createdAt: "2024-11-14T10:22:17.823Z",
      },
      {
        id: 84,
        userId: 2,
        message: "경기도에서 받을 수 있는 혜택은 뭐야?",
        sender: "user",
        messageType: "normal",
        createdAt: "2024-11-14T10:22:40.432Z",
      },
      {
        id: 85,
        userId: 2,
        message: "정부 지원금을 찾고 있어요",
        sender: "user",
        messageType: "normal",
        createdAt: "2024-11-14T10:23:02.539Z",
      },
      {
        id: 86,
        userId: 2,
        message: "어떤 지원금이 있는지 알려줄 수 있어?",
        sender: "user",
        messageType: "normal",
        createdAt: "2024-11-14T10:23:18.394Z",
      },
      {
        id: 87,
        userId: 2,
        message: "안녕하세요! 궁금한 게 있어서요.",
        sender: "user",
        messageType: "normal",
        createdAt: "2024-11-15T10:23:35.782Z",
      },
      {
        id: 88,
        userId: 2,
        message: "안녕하세요! 무엇을 도와드릴까요?",
        sender: "assistant",
        messageType: "normal",
        createdAt: "2024-11-15T10:23:40.902Z",
      },
      {
        id: 89,
        userId: 2,
        message: "서울에서 받을 수 있는 지원금 알려주세요",
        sender: "user",
        messageType: "normal",
        createdAt: "2024-11-15T10:24:01.210Z",
      },
      {
        id: 90,
        userId: 2,
        message: "안녕하세요! 지원금 관련해서 어떤 정보를 찾고 계신가요?",
        sender: "assistant",
        messageType: "normal",
        createdAt: "2024-11-15T10:24:05.972Z",
      },
      {
        id: 91,
        userId: 2,
        message: "대구에 사는데 지원 받을 수 있는 게 있나요?",
        sender: "user",
        messageType: "normal",
        createdAt: "2024-11-15T10:24:17.849Z",
      },
      {
        id: 92,
        userId: 2,
        message: "지원금을 찾고 있는 중이신가요? 도움을 드릴게요.",
        sender: "assistant",
        messageType: "normal",
        createdAt: "2024-11-16T10:24:21.395Z",
      },
      {
        id: 93,
        userId: 2,
        message: "지원금 신청 방법을 알고 싶어요.",
        sender: "user",
        messageType: "normal",
        createdAt: "2024-11-16T10:24:29.678Z",
      },
      {
        id: 94,
        userId: 2,
        message: "안녕하세요! 어떤 종류의 지원금을 찾고 계신가요?",
        sender: "assistant",
        messageType: "normal",
        createdAt: "2024-11-16T10:24:33.410Z",
      },
      {
        id: 95,
        userId: 2,
        message: "혼자서 아이 키우고 있는데 도움 받을 수 있는 게 있을까요?",
        sender: "user",
        messageType: "normal",
        createdAt: "2024-11-16T10:24:45.512Z",
      },
      {
        id: 96,
        userId: 2,
        message:
          "안녕하세요, 지원이 필요하신 부분을 자세히 알려주시면 도와드릴게요.",
        sender: "assistant",
        messageType: "normal",
        createdAt: "2024-11-16T10:24:48.213Z",
      },
      {
        id: 97,
        userId: 2,
        message: "지원금 받을 수 있는 조건이 뭔가요?",
        sender: "user",
        messageType: "normal",
        createdAt: "2024-11-16T10:25:02.654Z",
      },
      {
        id: 98,
        userId: 2,
        message: "기본 지원금 조건을 안내해 드릴까요?",
        sender: "assistant",
        messageType: "normal",
        createdAt: "2024-11-16T10:25:05.893Z",
      },
      {
        id: 99,
        userId: 2,
        message: "현재 받을 수 있는 지원금이 궁금해요.",
        sender: "user",
        messageType: "normal",
        createdAt: "2024-11-16T10:25:15.273Z",
      },
      {
        id: 100,
        userId: 2,
        message: "어떤 도움이 필요한지 알려주시면 지원금을 안내해드릴게요.",
        sender: "assistant",
        messageType: "normal",
        createdAt: "2024-11-16T10:25:20.816Z",
      },
      {
        id: 101,
        userId: 2,
        message: "지원금 신청 서류가 궁금해요.",
        sender: "user",
        messageType: "normal",
        createdAt: "2024-11-16T10:25:35.412Z",
      },
      {
        id: 102,
        userId: 2,
        message: "필요한 서류들을 안내해 드릴게요. 잠시만 기다려 주세요.",
        sender: "assistant",
        messageType: "normal",
        createdAt: "2024-11-16T10:25:38.901Z",
      },
    ]);
  }),
];
