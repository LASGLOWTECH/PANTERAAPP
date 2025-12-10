export const formatPrice = (p) =>
  `₦${p.replace(/,/g, "")}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
