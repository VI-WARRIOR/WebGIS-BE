interface CoordinatesStruct {
  longitude: string;
  latitude: string;
}

export interface locationDto {
  name?: string;
  images?: string[];
  description?: string;
  location?: [CoordinatesStruct];
}
