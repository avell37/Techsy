import { DataTable, StoreCard } from "@/shared/ui/custom"
import { ColumnDef } from "@tanstack/react-table";

interface StoreLayoutProps<TData> {
    title: string;
    subtitle: string;
    buttonLabel?: string;
    onClick?: () => void;
    columns: ColumnDef<TData, any>[];
    data: any[];
    filterKey: string;
}

export function StoreLayout<TData>({
    title,
    subtitle,
    buttonLabel,
    onClick,
    columns,
    data,
    filterKey
}: StoreLayoutProps<TData>) {
    return (
        <StoreCard
            title={title}
            subtitle={subtitle}
            buttonLabel={buttonLabel}
            onClick={onClick}
        >
            <DataTable columns={columns} data={data} filterKey={filterKey} />
        </StoreCard>
    )
}
