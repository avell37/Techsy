import { FavoritesList } from "@/entities/Favorites";
import { Container } from "@/shared/ui";
import { Header } from "@/widgets/Header";

const FavoritesPage = () => {
    return (
        <div>
            <Header />
            <Container>
                <FavoritesList />
            </Container>
        </div>
    );
};

export default FavoritesPage;
