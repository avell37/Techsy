import { Container, Spinner } from "@/shared/ui/custom";
import { useDevice } from "../../model/hooks/useDevice";
import { DevicePageView } from "./DevicePageView/DevicePageView";

export const DevicePageContainer = () => {
    const {
        device,
        loading,
        isFavorite,
        notifySuccess,
        notifyError,
        handleToggleFavorites
    } = useDevice();

    return (
        <div className="flex flex-col gap-[30px]">
            <Container>
                {loading ? (
                    <Spinner width="100px" height="100px" className="min-h-screen" />
                ) : (
                    <DevicePageView
                        device={device}
                        isFavorite={isFavorite}
                        notifySuccess={notifySuccess}
                        notifyError={notifyError}
                        toggleFavorites={handleToggleFavorites}
                    />
                )}
            </Container>
        </div>
    );
}
