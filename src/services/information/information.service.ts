import { sortByTypes } from "@/types/information/types";
import { AxiosInstance } from "axios";

class InformationAPI {
  public client;
  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getAllSupports() {
    try {
      const res = await this.client.get("/birth-support-data/all");
      console.log(res);
      return res.data.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getAllSupportSortBy(sortBy: sortByTypes) {
    const res = await this.client.get(
      `/birth-support-data/all?limit=5&sortBy=${sortBy}`
    );
    console.log(res);
    return res.data.data;
  }

  async getSupportDetail(id: number) {
    const res = await this.client.get(`/birth-support-data/${id}`);
    return res.data.data;
  }
}

export default InformationAPI;
