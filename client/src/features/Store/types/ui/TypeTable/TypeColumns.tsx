import { ColumnDef } from "@tanstack/react-table";
import { ArrowDownUp } from "lucide-react";
import { TypeActions } from "./TypeActions";
import type { IType } from "@/entities/Type";

export const TypeColumns: ColumnDef<IType>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => (
            <div 
                className="flex justify-center items-center gap-2"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Название
                <ArrowDownUp className="size-4" />
            </div>
        ),
        cell: ({ row }) => {
            return <div>{row.getValue("name")}</div> 
        }
    },
    {
        accessorKey: "createdAt",
        header: ({ column }) => (
            <div 
                className="flex justify-center items-center gap-2"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Дата создания
                <ArrowDownUp className="size-4" />
            </div>
        ),
        cell: ({ row }) => {
            const date = new Date(row.getValue("createdAt")).toLocaleDateString();
            return <div>{date}</div> 
        }
    },
    {
        accessorKey: "updatedAt",
        header: ({ column }) => (
            <div 
                className="flex justify-center items-center gap-2"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Последнее обновление
                <ArrowDownUp className="size-4" />
            </div>
        ),
        cell: ({ row }) => {
            const date = new Date(row.getValue("updatedAt")).toLocaleDateString();
            return <div>{date}</div> 
        }
    },
    {
        id: "actions",
        header: "Действия",
        cell: ({ row }) => <TypeActions type={row.original} />
    }
]