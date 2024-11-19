declare namespace kakao {
  namespace maps {
    class Map {
      constructor(container: HTMLElement, options?: any);
      setCenter(latLng: LatLng): void;
    }

    class LatLng {
      constructor(lat: number, lng: number);
    }

    class Marker {
      constructor(options: any);
      setMap(map: Map | null): void;
    }

    namespace services {
      class Geocoder {
        addressSearch(
          address: string,
          callback: (result: any[], status: any) => void
        ): void;
      }

      class Places {
        categorySearch(
          category: string,
          callback: (data: any[], status: any) => void,
          options?: any
        ): void;
        keywordSearch(
          keyword: string,
          callback: (data: any[], status: string, pagination: any) => void,
          options?: any
        ): void;
      }

      const Status: {
        OK: string;
        ERROR: string;
      };
    }
  }
}
