import { FieldError } from "react-hook-form";

export interface StarRatingProps {
    value: number;
    onChange?: (value: number) => void;
    readOnly?: boolean;
    size?: number;
    error?: FieldError;
}