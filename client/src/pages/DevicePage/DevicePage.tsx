import { Container, Spinner } from "@/shared/ui";
import { DevicePageView } from "@/entities/Device/ui/DevicePageComponents/DevicePageView/DevicePageView";
import { useDevice } from "@/entities/Device/model/hooks/useDevice";

const DevicePage = () => {
    const {
        device,
        loading,
        currentUser,
        isFavorite,
        notifySuccess,
        notifyError,
        handleToggleFavorites
    } = useDevice();

    return (
        <div className="flex flex-col gap-[30px]">
            <Container>
                {loading ? (
                    <Spinner width="100px" height="100px" />
                ) : (
                    <DevicePageView
                        device={device}
                        currentUser={currentUser}
                        isFavorite={isFavorite}
                        notifySuccess={notifySuccess}
                        notifyError={notifyError}
                        toggleFavorites={handleToggleFavorites}
                    />
                )}
            </Container>
        </div>
    );
};

export default DevicePage;
