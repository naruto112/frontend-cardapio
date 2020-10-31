export const isLetters = (e: React.FormEvent<HTMLInputElement>) => {
  let value = e.currentTarget.value;
  value = value.replace(/[^a-zA-Z]+/g, "");
  e.currentTarget.value = value;
};
export const isPhone = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 15;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");

  e.currentTarget.value = value;
};
