export interface LoginProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
    email: string,
    setEmail: (value: string) => void,
    password: string,
    setPassword: (value: string) => void,
    showPassword: boolean,
    toggleShowPassword: () => void,
}