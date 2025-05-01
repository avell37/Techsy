import { Header } from "@/widgets/Header/ui/Header";
import { ProductFilters } from "@/widgets/ProductFilters/ProductFilters";
import { FilteredSearch } from "@/features/FilteredSearch/FilteredSearch";
import { ProductList } from "@/features/ProductList/ProductList";
import { useEffect } from "react";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { fetchAllTypes, fetchAllBrands, fetchAllDevices } from "@/entities";

export const ShopPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllDevices());
        dispatch(fetchAllTypes());
        dispatch(fetchAllBrands());
    }, [dispatch]);

    return (
        <div className="h-full">
            <div className="h-full">
                <Header />
                <div className="flex w-full gap-[20px] h-full">
                    <ProductFilters />
                    <div className="flex flex-col max-w-[1200px] mt-[10px] w-full">
                        <FilteredSearch />
                        <ProductList />
                    </div>
                </div>
            </div>
        </div>
    );
};
