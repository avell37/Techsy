import { ColumnDef } from "@tanstack/react-table";
import { IDevice } from "@/shared/types";
import { ArrowDownUp } from "lucide-react";
import { DeviceActions } from "./DeviceActions";

export const DeviceColumns: ColumnDef<IDevice>[] = [
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
            return <div className="max-w-[200px]">{row.getValue("name")}</div> 
        }
    },
    {
        accessorKey: "rating",
        header: ({ column }) => (
            <div 
                className="flex justify-center items-center gap-2"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Рейтинг
                <ArrowDownUp className="size-4" />
            </div>
        ),
        cell: ({ row }) => {
            return <div>{row.getValue("rating")}</div> 
        }
    },
    {
        accessorKey: "price",
        header: ({ column }) => (
            <div 
                className="flex justify-center items-center gap-2"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Цена
                <ArrowDownUp className="size-4" />
            </div>
        ),
        cell: ({ row }) => {
            return <div>{row.getValue("price")}</div> 
        }
    },
    {
        accessorKey: "color",
        header: ({ column }) => (
            <div 
                className="flex justify-center items-center gap-2"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Цвет
                <ArrowDownUp className="size-4" />
            </div>
        ),
        cell: ({ row }) => {
            return <div>{row.getValue("color")}</div> 
        }
    },
    {
        accessorKey: "storage",
        header: ({ column }) => (
            <div 
                className="flex justify-center items-center gap-2"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Память
                <ArrowDownUp className="size-4" />
            </div>
        ),
        cell: ({ row }) => {
            return <div>{row.getValue("storage")} Гб</div> 
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
        cell: ({ row }) => <DeviceActions device={row.original} />
    }
]