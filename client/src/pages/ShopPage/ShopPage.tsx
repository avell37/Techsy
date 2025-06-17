import { Header } from "@/widgets/Header";
import { FilteredSearch } from "@/features/FilteredSearch";
import { ProductList } from "@/features/ProductList";
import { Container } from "@/shared/ui/Container/Container";
import { ProductFilters } from "@/features/ProductFilters";

const ShopPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
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
    );
};

export default ShopPage;
