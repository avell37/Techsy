import { ColumnDef } from "@tanstack/react-table";
import { ArrowDownUp } from "lucide-react";
import { ReviewActions } from "./ReviewActions";
import { Link } from "react-router-dom";
import { DEVICE_ROUTE } from "@/shared/config/consts";
import type { IReview } from "@/entities/Review";

export const ReviewColumns: ColumnDef<IReview>[] = [
    {
        accessorKey: "user",
        header: ({ column }) => (
            <div 
                className="flex justify-center items-center gap-2"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Автор
                <ArrowDownUp className="size-4" />
            </div>
        ),
        cell: ({ row }) => {
            const user = row.original.User;
            return <div className="max-w-[200px]">{user?.username}</div> 
        }
    },
    {
        accessorKey: "device",
        header: ({ column }) => (
            <div 
                className="flex justify-center items-center gap-2"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Товар
                <ArrowDownUp className="size-4" />
            </div>
        ),
        cell: ({ row }) => {
            const name = row.original.Device?.name;
            const device = row.original.Device;
            const shortComment = name && name.length > 15
                ? name.slice(0, 10) + '...'
                : name;
            return <Link to={`${DEVICE_ROUTE}/${device?.id}`}>
                <div className="max-w-[200px]">{shortComment}</div> 
            </Link>
        }
    },
    {
        accessorKey: "comment",
        header: ({ column }) => (
            <div 
                className="flex justify-center items-center gap-2"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Комментарий
                <ArrowDownUp className="size-4" />
            </div>
        ),
        cell: ({ row }) => {
            const comment = row.original.comment;
            const shortComment = comment && comment.length > 15
                ? comment.slice(0, 10) + '...'
                : comment;
            return <div className="max-w-[200px]">{shortComment}</div> 
        }
    },
    {
        accessorKey: "rate",
        header: ({ column }) => (
            <div 
                className="flex justify-center items-center gap-2"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Оценка
                <ArrowDownUp className="size-4" />
            </div>
        ),
        cell: ({ row }) => {
            return <div>{row.getValue("rate")}</div> 
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
        cell: ({ row }) => <ReviewActions review={row.original} />
    }
]