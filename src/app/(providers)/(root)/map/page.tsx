"use client";

import MapInputBox from "@/components/organisms/MapInputBox";
import Page from "@/components/Layouts/Page/Page";
import Section from "@/components/Layouts/Section/Section";
import Header from "@/components/molecules/Header";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import useKakaoLoader from "./useKakaoLoader";

const MapPage = () => {
  useKakaoLoader();
  const [mapInput, setMapInput] = useState<string>("");
  const [markers, setMarkers] = useState<any[]>([]);
  const [info, setInfo] = useState<{ content: string } | null>(null);
  const [map, setMap] = useState<any | null>(null);

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch("병원", (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (var i = 0; i < data.length; i++) {
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });

          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        map.setBounds(bounds);
      }
    });
  }, [map]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMapInput(e.currentTarget.value);
  };

  const onMapSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Page>
      <Header intent="labelWithBackIcon" title="주변 시설 찾기" />
      <Section>
        <MapInputBox
          value={mapInput}
          onChange={onInputChange}
          onSubmit={onMapSubmit}
        />
      </Section>
      <Section>
        <Map
          center={{
            lat: 37.566826,
            lng: 126.9786567,
          }}
          style={{
            width: "100%",
            height: "350px",
          }}
          level={5}
          onCreate={setMap}
        >
          {markers.map((marker) => (
            <MapMarker
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              position={marker.position}
              image={{
                src: "/images/Vector.png",
                size: {
                  width: 42,
                  height: 52,
                },
              }}
              onClick={() => setInfo(marker)}
            >
              {info && info.content === marker.content && (
                <div style={{ color: "#000" }}>{marker.content}</div>
              )}
            </MapMarker>
          ))}
        </Map>
      </Section>
    </Page>
  );
};

export default MapPage;
