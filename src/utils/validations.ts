export const isNameValid = (name: string): boolean => {
  const parts = name.trim().split(/\s+/);
  if (parts.length < 2) return false;
  return parts.every((part) => part.length >= 3);
};

export const isCnpjValid = (cnpj: string): boolean => {
  const onlyDigits = cnpj.replace(/\D/g, "");
  return onlyDigits.length === 14;
};

export const formatCnpj = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 14);
  return digits
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
};

export const isPasswordStrong = (pwd: string): boolean => {
  const hasMinLength = pwd.length >= 8;
  const hasUpperCase = /[A-Z]/.test(pwd);
  const hasLowerCase = /[a-z]/.test(pwd);
  const hasNumber = /[0-9]/.test(pwd);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(pwd);
  return (
    hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar
  );
};
