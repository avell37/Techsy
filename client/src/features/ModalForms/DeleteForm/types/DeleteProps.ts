export interface DeleteProps {
    entityType: "brand" | "type" | "device",
    entityName: string,
    onClose: () => void;
}