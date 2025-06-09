import { Header } from "@/widgets/Header";
import { FilteredSearch } from "@/features/FilteredSearch";
import { ProductList } from "@/features/ProductList";
import { useEffect } from "react";
import { useAppDispatch } from "@/shared/hooks";
import { fetchAllBrands } from "@/entities/Brand";
import { fetchAllTypes } from "@/entities/Type";
import { fetchAllDevices } from "@/entities/Device";
import { fetchAllFavoriteDevices } from "@/features/Favorites";
import { Container } from "@/shared/ui/Container/Container";
import { ProductFilters } from "@/features/ProductFilters";

const ShopPage = () => {
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
                <Container>
                    <div className="flex w-full gap-[20px] h-full">
                        <ProductFilters />
                        <div className="flex flex-col mt-[10px] w-full">
                            <FilteredSearch />
                            <ProductList />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default ShopPage;
