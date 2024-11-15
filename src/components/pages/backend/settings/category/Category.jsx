import useQueryData from '@/components/custom-hook/useQueryData';
import { setIsAdd, setIsConfirm, setIsDelete } from '@/components/store/storeAction';
import { StoreContext } from '@/components/store/storeContext';
import React from 'react'
import SpinnerTable from '../../partials/spinners/SpinnerTable';
import LoaderTable from '../../partials/spinners/LoaderTable';
import NoData from '../../partials/icons/NoData';
import { Archive, ArchiveRestore, Pencil,  Trash } from 'lucide-react';
import CategoryModalAdd from './CategoryModalAdd';
import ModalConfirm from '../../partials/modals/ModalConfirm';
import ModalDelete from '../../partials/modals/ModalDelete';
import ToastSuccess from '../../partials/ToastSuccess';
import ModalValidate from '../../partials/modals/ModalValidate';
import ServerError from '../../partials/icons/ServerError';
import Pill from '../../partials/Pill';
// import { Archive, ArchiveRestore,  Pencil,  Trash } from 'lucide-react'
// import Pill from '../../partials/Pill'
// import CategoryModalAdd from './CategoryModalAdd'
// import { StoreContext } from '@/components/store/storeContext'
// import { setIsAdd, setIsConfirm, setIsDelete } from '@/components/store/storeAction'
// import SpinnerTable from '../../partials/spinners/SpinnerTable'
// import ModalDelete from '../../partials/modals/ModalDelete'
// import ModalValidate from '../../partials/modals/ModalValidate'
// import ModalConfirm from '../../partials/modals/ModalConfirm'
// import useQueryData from '@/components/custom-hook/useQueryData'
// import LoaderTable from '../../partials/spinners/LoaderTable'
// import ServerError from '../../partials/icons/ServerError'
// import NoData from '../../partials/icons/NoData'
// import ToastSuccess from '../../partials/ToastSuccess'


const Category = () => {
    const {dispatch, store} =React.useContext(StoreContext)
    const [id, setId] = React.useState(null);
    const [isActive, setIsActive] = React.useState(0);
    const [itemEdit, setItemEdit] = React.useState(null);
 
    let counter = 0
    const {
      isLoading,
      isFetching,
      error,
      data: result,
    } = useQueryData (
     `/v1/category`, // endpoint
     "get", // method
      "category",
    );

      const handleAdd = () => {
       dispatch(setIsAdd(true))
       setItemEdit(null)
     }

      const handleEdit = (item) => {
        dispatch(setIsAdd(true))
        setItemEdit(item)
      }
      const handleDelete = () => {
        dispatch(setIsDelete(true))
      }
      const handleArchive = (item) => {
        dispatch(setIsConfirm(true))
        setIsActive(0);
        setId(item.category_aid)
      }
   
      const handleRestore = (item) => {
        dispatch(setIsConfirm(true))
        setIsActive(1);
        setId(item.category_aid)
      }




  return (
    <>
    <section>
        <button className='btn btn-dark'onClick={handleAdd}>Add New</button>
        <div className="table_wrapper bg-primary p-4 mt-5 rounded-md relative">
        {!isLoading || isFetching && <SpinnerTable/>}
        <table>
        <thead>
          <tr>
            <td>#</td>
            <td >Status</td>
            <td>Title</td>
            <td></td>
          </tr>
        </thead>


        <tbody>
        {(
            (isLoading && !isFetching) || result?.data.length === 0) && (
            <tr>
              <td colSpan="100%">
                {isLoading ? (
                  <LoaderTable count={30} cols={6} />
                ) : (
                  <NoData />
                )}
              </td>
            </tr>
          )}


            {error && (
               <tr>
                <td colSpan="100%">
                 <ServerError/>
                </td>
              </tr>
            )}  
          {result?.data.map((item, key) => {
              counter++
              return(
                <tr key={key}>
               <td className='w-10'>{counter}. 
                </td>
                <td className='w-20'>
                <Pill isActive={item.category_is_active} />
                </td>
                    <td>{item.category_title} 
                </td>
               
                <td>
                <ul className='table-action'>
                      {item.category_is_active ?
                      <>
                        <li><button data-tooltip="Edit" onClick={() => handleEdit(item)}><Pencil size={15}/></button></li>
                        <li><button data-tooltip="Archive" onClick={() => handleArchive(item)}>
                          <Archive size={15}/>
                        </button></li>
                      </>
                       :
                        <>
                       <li><button data-tooltip="Restore" onClick={() => handleRestore(item)}>
                        <ArchiveRestore size={15}/></button></li>  
                       <li><button data-tooltip="Delete" onClick={() => handleDelete()}><Trash size={15}/></button></li>
                       </>
                      }
                    </ul>  
                </td>
                </tr>
              )}
            )}
        </tbody>
      </table>
    </div>
    </section>
 
 {store.isAdd && <CategoryModalAdd itemEdit={itemEdit}/>}

{store.isConfirm &&  
<ModalConfirm 
    queryKey ="category"
    mysqlApiArchive ={`/v1/category/active/${id}`}
    active={isActive}
    
/>}

{store.isDelete && <ModalDelete 
    mysqlApiDelete ={`/v1/category/${id}`}   
    queryKey ="category"
  

/>}
{store.success && <ToastSuccess/>}
{store.validate && <ModalValidate />}

   </>
   
  )
}


export default Category


