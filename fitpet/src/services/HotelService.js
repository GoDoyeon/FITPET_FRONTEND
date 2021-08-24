import axios from 'axios';

export default class HotelService {
  // [호텔 메인] 인기있는 숙소 8개
  static async getHotelMainHitsList() {
    const response = await axios.get('api/lodging/hitsList');
    return response;
  }

  // 호텔 리스트
  static async getHotelList() {
    const response = await axios.get('/api/lodging/list');
    return response;
  }
}
