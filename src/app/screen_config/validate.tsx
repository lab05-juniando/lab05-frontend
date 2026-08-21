export type ConfigErrors = {
    email: string;
    phone: string;
    birthDate: string;
};

const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGEX_PHONE = /^\+?\d{2}\s?\d{2}\s?\d{4,5}-?\d{4}$/;
const REGEX_DATE = /^\d{2}\/\d{2}\/\d{4}$/;

export function validateEmail(email: string): string {
    return email.trim().length === 0
        ? "Informe um email"
        : !REGEX_EMAIL.test(email)
            ? "Email inválido"
            : "";
}

export function validatePhone(phone: string): string {
    return phone.trim().length === 0
        ? "Informe um telefone"
        : !REGEX_PHONE.test(phone)
            ? "Telefone inválido"
            : "";
}

export function validateBirthDate(birthDate: string): string {
    return birthDate.trim().length === 0
        ? "Informe a data de nascimento"
        : !REGEX_DATE.test(birthDate)
            ? "Use o formato DD/MM/AAAA"
            : "";
}

export function validateConfig(email: string, phone: string, birthDate: string): ConfigErrors {
    return {
        email: validateEmail(email),
        phone: validatePhone(phone),
        birthDate: validateBirthDate(birthDate),
    };
}

export function hasError(errors: ConfigErrors): boolean {
    return Object.values(errors).some((error) => error.length > 0);
}