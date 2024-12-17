export interface TourPackage {
  _id: string;
  title: string;
  description: string;
  price: number;
  availableDates: string[];
  image: string;
}

export interface Booking {
  customerName: string;
  email: string;
  phone: string;
  travelers: number;
  specialRequests?: string;
  packageId: string;
  totalPrice: number;
}
