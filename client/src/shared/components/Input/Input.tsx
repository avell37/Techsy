interface InputProps {
    className: string,
    type: string,
    placeholder: string,
    required?: string
}

export const Input: React.FC<InputProps> = ({className, type, placeholder}) => {
    return (
        <input
            className={className}
            type={type}
            placeholder={placeholder}
        />
    )
}
