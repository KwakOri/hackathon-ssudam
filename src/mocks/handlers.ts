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
];
