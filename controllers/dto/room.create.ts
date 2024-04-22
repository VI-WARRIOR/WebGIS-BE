interface LocationStruct {
  longitude: string;
  latitude: string;
}

export interface RoomDto {
  name: string;
  description: string;
  location: LocationStruct[];
  type: string;
  size: string;
  price: number;
  currency: string;
  rate: number;
  policy: string;
}
