export interface PaymentData {
  paymentOption: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
  country: string;
  email: string;
  name: string;
}

export interface ReviewData {
  image: string;
  title: string;
  subTotal: number;
  taxes: number;
}
