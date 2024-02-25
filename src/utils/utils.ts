export const getAgeByBirthDay = (birthDay: string): number => {
  return new Date().getFullYear() - new Date(birthDay).getFullYear();
};
