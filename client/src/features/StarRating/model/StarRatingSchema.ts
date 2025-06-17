import { FieldError } from "react-hook-form";

export interface StarRatingSchema {
    value: number;
    onChange?: (value: number) => void;
    readOnly?: boolean;
    size?: number;
    error?: FieldError;
}