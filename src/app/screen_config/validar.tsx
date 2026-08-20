export type ErrosConfig = {
    email: string;
    phone: string;
    birthDate: string;
};

const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGEX_PHONE = /^\+?\d{2}\s?\d{2}\s?\d{4,5}-?\d{4}$/;
const REGEX_DATA = /^\d{2}\/\d{2}\/\d{4}$/;

export function validarEmail(email: string): string {
    return email.trim().length === 0
        ? "Informe um email"
        : !REGEX_EMAIL.test(email)
            ? "Email inválido"
            : "";
}

export function validarPhone(phone: string): string {
    return phone.trim().length === 0
        ? "Informe um telefone"
        : !REGEX_PHONE.test(phone)
            ? "Telefone inválido"
            : "";
}

export function validarBirthDate(birthDate: string): string {
    return birthDate.trim().length === 0
        ? "Informe a data de nascimento"
        : !REGEX_DATA.test(birthDate)
            ? "Use o formato DD/MM/AAAA"
            : "";
}

export function validarConfig(email: string, phone: string, birthDate: string): ErrosConfig {
    return {
        email: validarEmail(email),
        phone: validarPhone(phone),
        birthDate: validarBirthDate(birthDate),
    };
}

export function temErro(erros: ErrosConfig): boolean {
    return Object.values(erros).some((erro) => erro.length > 0);
}