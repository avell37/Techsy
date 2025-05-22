import { entityConfig } from "@/shared/config/entityConfig"
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { useEffect } from "react";

type Entity = "brand" | "type" | "device";

export const useDeleteEntity = (entityType: Entity) => {
    const config = entityConfig[entityType];
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (config?.fetch) dispatch(config.fetch());
    }, [dispatch, config]);

    const items = useAppSelector(config?.selector || (() => []))

    return {
        items,
        remove: config?.remove,
    }
}