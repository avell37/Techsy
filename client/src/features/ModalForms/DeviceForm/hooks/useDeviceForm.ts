import { useAppDispatch, useAppSelector, useNotification } from "@/shared/hooks";
import { useState, useEffect, useCallback } from "react";
import { fetchAllBrands } from "@/entities/Brand";
import { fetchAllTypes } from "@/entities/Type";
import { nanoid } from "nanoid";
import { filtersDropdownItems } from "@/features/ProductFilters";
import { createDevice } from "@/entities";
import { DeviceInfoSchema } from "../types/DeviceInfoSchema";
import { formDataUtils, handleServerFormError } from "@/shared/lib";
import { deviceInitialState } from "../utils/deviceInitialState";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DeviceYupSchema } from "../lib/DeviceYupSchema";
import { DeviceFormState } from "../types/DeviceFormState";
import { useActions } from "@/shared/hooks";

export const useDeviceForm = () => {
    const dispatch = useAppDispatch();
    const { brands } = useAppSelector((state) => state.brandReducer);
    const { types } = useAppSelector((state) => state.typeReducer);
    const [info, setInfo] = useState<DeviceInfoSchema[]>([]);
    const { notifySuccess, notifyWarn, notifyError } = useNotification();
    const { fetchAllDevices } = useActions();

    const { control, handleSubmit, reset, watch, setValue,
        setError, formState: { errors } } = useForm<DeviceFormState>({
            resolver: yupResolver(DeviceYupSchema),
            defaultValues: deviceInitialState
        })

    const brandName = watch("brandName");
    const typeName = watch("typeName");
    const img = watch("img");

    useEffect(() => {
        dispatch(fetchAllBrands());
        dispatch(fetchAllTypes());
    }, [dispatch]);

    const handleBrandSelect = (id: string, name: string) => {
        setValue("brandId", id);
        setValue("brandName", name)
    };

    const handleTypeSelect = (id: string, name: string) => {
        setValue("typeId", id);
        setValue("typeName", name)
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setValue("img", selectedFile);
        }
    };

    const handleAddInfo = () => {
        setInfo([...info, { id: nanoid(), title: '', description: '' }])
    }

    const handleChangeInfo = useCallback((id: string, key: string, value: string) => {
        setInfo((prevInfo) =>
            prevInfo.map((i) =>
                i.id === id ? { ...i, [key]: value } : i
            )
        );
    }, []);

    const handleRemoveInfo = (id: string) => {
        setInfo(info.filter(i => i.id !== id))
    }

    const handleSubmitForm = async (data: DeviceFormState) => {
        if (!data.img) return notifyWarn('Выберите фотографию');

        try {
            const dataWithInfo = {
                ...data,
                info: JSON.stringify(info),
            }
            const formData = formDataUtils(dataWithInfo);
            await createDevice(formData);
            fetchAllDevices();
            notifySuccess("Отлично! Устройство создано!");
            reset();
            setInfo([]);
        } catch (err) {
            handleServerFormError<DeviceFormState>(
                err,
                setError,
                {
                    name: "name",
                    price: "price",
                    brandId: "brandId",
                    typeId: "typeId",
                    img: "img"
                },
                notifyError
            )
        }
    };

    const handleChange = (field: keyof DeviceFormState, value: string) => {
        setValue(field, value);
    }

    const brandItems = filtersDropdownItems({
        list: brands,
        onSelect: handleBrandSelect,
    });

    const typeItems = filtersDropdownItems({
        list: types,
        onSelect: handleTypeSelect,
    });

    return {
        control,
        errors,
        brandItems,
        typeItems,
        info,
        brandName,
        typeName,
        img,
        handleChange,
        handleFileChange,
        handleSubmitForm: handleSubmit(handleSubmitForm),
        handleSubmit,
        handleAddInfo,
        handleChangeInfo,
        handleRemoveInfo
    }
}