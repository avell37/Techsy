export type EntityKey = "brand" | "type" | "device";

export interface UseDeleteFormProps {
    entityType: EntityKey;
    onClose?: () => void;
}