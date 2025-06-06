import { setSortType } from "../slice/sortSlice"
import { dropdownFiltersSchema } from "../types/dropdownFiltersSchema"

export const dropdownItemsWithFilters = ({dispatch, setFilter}: dropdownFiltersSchema) => [
    {
        text: "Фильтры",
        onClick: () => {
            dispatch(setSortType(null))
            setFilter('Фильтры')
        }
    },
    {
        text: "Цена ↑",
        onClick: () => {
            dispatch(setSortType('price-inc'))
            setFilter('Цена ↑')
        }
    },
    {
        text: "Цена ↓",
        onClick: () => {
            dispatch(setSortType('price-dec'))
            setFilter('Цена ↓')
        }
    },
    {
        text: "По рейтингу",
        onClick: () => {
            dispatch(setSortType('rating'))
            setFilter('По рейтингу')
        }
    },
]
