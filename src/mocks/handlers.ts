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
    return HttpResponse.json({
      data: [
        {
          id: 73,
          userId: 2,
          message: "안산에 사는데 지원금 추천좀 해줘",
          sender: "user",
          messageType: "normal",
          createdAt: "2024-11-17T10:18:17.323Z",
        },
        {
          id: 74,
          userId: 2,
          message: "안산에 사는데 지원금 추천좀 해줘",
          sender: "user",
          messageType: "normal",
          createdAt: "2024-11-17T10:18:40.992Z",
        },
        {
          id: 75,
          userId: 2,
          message: "안산에 사는데 지원금 추천좀 해줘",
          sender: "user",
          messageType: "normal",
          createdAt: "2024-11-17T10:18:57.384Z",
        },
        {
          id: 76,
          userId: 2,
          message: "안녕",
          sender: "user",
          messageType: "normal",
          createdAt: "2024-11-17T10:20:03.238Z",
        },
        {
          id: 77,
          userId: 2,
          message: "안녕",
          sender: "user",
          messageType: "normal",
          createdAt: "2024-11-17T10:20:51.987Z",
        },
        {
          id: 78,
          userId: 2,
          message: "안녕",
          sender: "user",
          messageType: "normal",
          createdAt: "2024-11-17T10:21:28.480Z",
        },
        {
          id: 79,
          userId: 2,
          message:
            "안녕하세요, 어떻게 도와드릴 수 있을까요? 지금 마음이 편치 않으신 것 같아서 걱정이네요. 혹시 어떤 이야기를 나누고 싶으신지 알려주실 수 있을까요?",
          sender: "assistant",
          messageType: "normal",
          createdAt: "2024-11-17T10:21:32.451Z",
        },
        {
          id: 80,
          userId: 2,
          message: "안녕",
          sender: "user",
          messageType: "normal",
          createdAt: "2024-11-17T10:21:38.512Z",
        },
        {
          id: 81,
          userId: 2,
          message:
            "안녕하세요, 어떻게 도와드릴 수 있을까요? 지금 마음이 편치 않으신 것 같아서 걱정이네요. 혹시 어떤 이야기를 나누고 싶으신지 알려주실 수 있을까요?",
          sender: "assistant",
          messageType: "normal",
          createdAt: "2024-11-17T10:21:41.861Z",
        },
        {
          id: 82,
          userId: 2,
          message: "안산에 사는데 지원금 추천좀 해줘",
          sender: "user",
          messageType: "normal",
          createdAt: "2024-11-17T10:21:42.940Z",
        },
      ],
    });
  }),
];
