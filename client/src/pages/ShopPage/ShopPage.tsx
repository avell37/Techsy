import { Header } from "@/widgets/Header/ui/Header";
import { ProductFilters } from "@/widgets/ProductFilters/ui/ProductFilters";
import { FilteredSearch } from "@/features/FilteredSearch/FilteredSearch";
import { ProductList } from "@/features/ProductList/ProductList";
import { useEffect } from "react";
import { fetchAllDevices } from "@/entities/Device";
import { useAppDispatch } from "@/shared/types/useAppDispatch";
import { fetchAllTypes } from "@/entities/Type/model/typeSlice";
import { fetchAllBrands } from "@/entities/Brand";

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
