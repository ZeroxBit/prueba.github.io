export const getAgeByBirthDay = (birthDay: string): number => {
  return new Date().getFullYear() - new Date(birthDay).getFullYear();
};

export const scrollTop = () => {
  window.scrollTo(0, 0);
};
