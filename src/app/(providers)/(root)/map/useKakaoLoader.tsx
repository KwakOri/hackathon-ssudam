import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: "b76ea143fd90322633aefc288e4b804f",
    libraries: ["clusterer", "drawing", "services"],
  });
}
