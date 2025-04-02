import { Header } from "@/widgets/Header/ui/Header"
import { ProductFilters } from "@/widgets/ProductFilters/ui/ProductFilters"
import { FilteredSearch } from "@/features/FilteredSearch/FilteredSearch"
import { ProductList } from "@/entities/ProductList/ProductList"

export const ShopPage = () => {
    return (
        <div>
            <div className="">
            <Header />
            <div className="flex w-full gap-[20px]">
                <ProductFilters />
                <div className="flex flex-col max-w-[1200px] mt-[10px] w-full">
                    <FilteredSearch />
                    <ProductList />
                </div>
            </div>
        </div>
        </div>
    )
}
