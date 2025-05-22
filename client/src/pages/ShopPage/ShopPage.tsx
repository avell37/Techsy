import { Header } from "@/widgets/Header";
import { ProductFilters } from "@/widgets/ProductFilters";
import { FilteredSearch } from "@/features/FilteredSearch";
import { ProductList } from "@/features/ProductList";
import { useEffect } from "react";
import { useAppDispatch } from "@/shared/hooks";
import { fetchAllBrands } from "@/entities/Brand";
import { fetchAllTypes } from "@/entities/Type";
import { fetchAllDevices } from "@/entities/Device";
import { fetchAllFavoriteDevices } from "@/features/Favorites";

export const ShopPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllDevices());
        dispatch(fetchAllTypes());
        dispatch(fetchAllBrands());
        dispatch(fetchAllFavoriteDevices());
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
