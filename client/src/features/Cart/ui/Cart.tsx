import { basketSelector, userSelector } from '@/entities';
import { useAppSelector, useToggleFavorites } from '@/shared/hooks';
import { checkFavoriteDevices } from '@/shared/lib';
import { useMemo } from 'react'
import { CartList } from './CartList/CartList';
import { CartDetails } from './CartDetails';
import { Container } from '@/shared/ui';

export const Cart = () => {
    const basket = useAppSelector(basketSelector.basket);
    const loading = useAppSelector(basketSelector.loading)
    const user = useAppSelector(userSelector.currentUser);
    const favorites = user?.favorites;
    const { toggleFavorites } = useToggleFavorites();

    const isFavorite = useMemo(() => {
        return (deviceId: string) =>
            checkFavoriteDevices({ deviceId, favorites });
    }, [favorites])

    const handleToggleFavorites = (deviceId: string) => toggleFavorites(deviceId);

    return (
        <Container>
            <div className="flex justify-center gap-[50px] mt-5 py-6 rounded-xl max-lg:flex-col">
                <div className="flex-1 p-8 border border-primary-900/30 rounded-xl bg-gradient shadow-lg w-full">
                    <CartList 
                        basket={basket}
                        loading={loading}
                        isFavorite={isFavorite}
                        onToggleFavorites={handleToggleFavorites}
                    />
                </div>
                <div className="max-w-[375px] w-full">
                    <CartDetails />
                </div>
            </div>
        </Container>
    );
}
