import { EModalVariables } from "@/shared/config/renderVariables";
import { BrandForm, TypeForm, DeviceForm, ReviewForm, DeleteForm, ProfileForm } from "@/features/ModalForms";
import { JSX } from "react";

type ModalComponent = (props: { onClose: () => void }) => JSX.Element;

export const modalComponents: Record<EModalVariables, ModalComponent> = {
  [EModalVariables.ADD_BRAND]: BrandForm,
  [EModalVariables.ADD_TYPE]: TypeForm,
  [EModalVariables.ADD_DEVICE]: DeviceForm,
  [EModalVariables.ADD_REVIEW]: ReviewForm,

  [EModalVariables.DELETE_BRAND]: (props) => (
    <DeleteForm {...props} entityType="brand" entityName="бренд" />
  ),
  [EModalVariables.DELETE_TYPE]: (props) => (
    <DeleteForm {...props} entityType="type" entityName="тип" />
  ),
  [EModalVariables.DELETE_DEVICE]: (props) => (
    <DeleteForm {...props} entityType="device" entityName="устройство" />
  ),

  [EModalVariables.EDIT_USERNAME]: (props) => (
    <ProfileForm {...props} edit="username" />
  ),
  [EModalVariables.EDIT_EMAIL]: (props) => (
    <ProfileForm {...props} edit="email" />
  ),
  [EModalVariables.EDIT_PASSWORD]: (props) => (
    <ProfileForm {...props} edit="password" />
  )
};