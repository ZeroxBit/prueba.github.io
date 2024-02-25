export const validPhone = (phone: string) => {
  const regex = /^[0-9]{9}$/;
  return regex.test(phone);
};

export const validDNI = (dni: string) => {
  const regex = /^[0-9]{8}$/;
  return regex.test(dni);
};

export const validCE = (ce: string) => {
  const regex = /^[A-Z0-9]{9}$/;
  return regex.test(ce);
};
