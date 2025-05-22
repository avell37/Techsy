export interface RegistrationSchema {
    username: string,
    setUsername: (value: string) => void,
    email: string,
    setEmail: (value: string) => void,
    password: string,
    setPassword: (value: string) => void,
    showPassword: boolean,
    toggleShowPassword: () => void,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}