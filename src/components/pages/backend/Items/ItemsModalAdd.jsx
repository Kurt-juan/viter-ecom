import { ImagePlusIcon, X } from "lucide-react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd, setMessage, setSuccess, setValidate } from "@/components/store/storeAction";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from 'Yup';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "@/components/helpers/queryData";
import { InputPhotoUpload, InputSelect, InputText, InputTextArea } from "@/components/helpers/formInputs";
import SpinnerButton from "../partials/spinners/SpinnerButton";
import useUploadPhoto from "@/components/custom-hook/useUploadPhoto";
import { imgPath } from "@/components/helpers/functions-general";
import useQueryData from "@/components/custom-hook/useQueryData";


const ItemsModalAdd = ({itemEdit}) => {
  const {dispatch} = React.useContext(StoreContext)
  const handleClose = () => dispatch(setIsAdd(false))

  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
    "/v1/upload-photo", 

  );

  const {
    isLoading:categoryIsLoading,
    isFetching:categoryIsFetching,
    error:categoryError,
    data: category,
  } = useQueryData(
    "/v1/category", // endpoint
    "get", // method
    "category" // key
  );

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/items/${itemEdit.items_aid}` :`/v1/items`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["items"],
      });


      // show error box
      if (data.success) {
        dispatch(setIsAdd(false))
        dispatch(setSuccess(true))
        dispatch(setMessage(`Record ${itemEdit ? "Updated" : "Added"}`))
      } else {
        dispatch(setValidate(true))
        dispatch(setMessage(data.error))
      }
    },
  });







  const initVal = {
    items_title: itemEdit ? itemEdit.items_title : '',
    items_price: itemEdit ? itemEdit.items_price : '',
    items_category: itemEdit ? itemEdit.items_category : '',
    items_title_old: itemEdit ? itemEdit.items_title : '',
  }


  const yupSchema = Yup.object({
    items_title: Yup.string().required('Required'),
    items_price: Yup.string().required('Required'),
    items_category: Yup.string().required('Required'),

  })




  return (
    <ModalWrapper>
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
            mutation.mutate({...values,
              items_photo:
                (itemEdit?.items_photo === "" && photo) ||
                (!photo && "") ||
                (photo === undefined && "") ||
                (photo && itemEdit?.items_photo !== photo?.name)
                  ? photo?.name || ""
                  : itemEdit?.items_photo || "",
            });
            uploadPhoto();

          }}
        >
          {(props) => {
            return (
            <Form >
              <div className="modal-main absolute top-0 right-0 h-[100dvh] w-[320px] bg-primary border-l border-line grid grid-rows-[auto,_1fr,_auto] animate-slideLeft">
                <div className="modal-header p-3 px-4 pb-0 flex justify-between items-center self-start">
                  <h5 className="mb-0">{itemEdit ? "Edit" : "Add"} Items</h5>
                  <button onClick={handleClose}>
                    <X />
                  </button>
                </div>


                <div className="modal-body  p-3 px-4 ">
                <div className="input-wrap relative  group input-photo-wrap h-[150px] ">
                {itemEdit === null && photo === null ? (
                  <div className="w-full  rounded-md flex justify-center items-center flex-col h-full">
                    <ImagePlusIcon
                      size={50}
                      strokeWidth={1}
                      className="opacity-20 group-hover:opacity-50 transition-opacity"
                    />
                    <small className="opacity-20 group-hover:opacity-50 transition-opacity">
                      Upload Photo
                    </small>
                  </div>
                ) : (
                  <img
                    src={
                      photo
                        ? URL.createObjectURL(photo) // preview
                        : imgPath + "/" + itemEdit?.items_photo // check db
                    }
                    alt="employee photo"
                    className={`group-hover:opacity-30 duration-200 relative object-cover h-full w-full  m-auto ${mutation.isPending ? "opacity-40 pointer-events-none" : ""}`}
                  />
                )}

                <InputPhotoUpload
                  name="photo"
                  type="file"
                  id="photo"
                  accept="image/*"
                  title="Upload photo"
                  onChange={(e) => handleChangePhoto(e)}
                  onDrop={(e) => handleChangePhoto(e)}
                  className={`opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full  m-auto cursor-pointer w-full h-full ${mutation.isPending ? "pointer-events-none" : ""}`}
                />
              </div>

                  <div className="input-wrap">
                      <InputText
                      label="Item"
                      type="text"
                      name="items_title"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrap">
                    <InputText
                      label="Price"
                      type="text"
                      name="items_price"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrap">
                    
                  <InputSelect
                    label="Category"
                    name="items_category"
                    // disabled={mutation.isLoading}
                  >
                    <optgroup label="Select Category">
                      <option value="" hidden></option>
                      {!categoryIsLoading && category?.data.length > 0 ? (
                        category?.data.map((item, key) => (
                          <option key={key} value={item.category_title}>
                            {item.category_title}
                          </option>
                        ))
                      ) : (
                        <option value="">No data</option>
                      )}
                    </optgroup>
                  </InputSelect>
                  </div>
            
                </div>
                <div className="modal-action flex justify-end gap-3 items-center p-3 px-4 pb-5 self-start">
                  <button
                    className="btn btn-black min-w-[90px] flex justify-center"
                    type="submit"
                  >
                    {mutation.isPending ? <SpinnerButton/> : 'Save'}
                  </button>
                  <button
                    className="btn btn-cancel min-w-[90px] flex justify-center"
                    type="reset"
                    onClick={handleClose}
                   
                  >
                    Cancel
                  </button>
                </div>
              </div>
              </Form>
            );
          }}
        </Formik>
         
    </ModalWrapper>
  );
};


export default ItemsModalAdd;
