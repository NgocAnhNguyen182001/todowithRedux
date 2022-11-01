import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
//hiển thị thông báo toast cho api khi call
export const toastError = error => {
    let mess = ''
    if(typeof error === "object" && error.message){
        mess = error.message
    }
    if(mess !== null && typeof mess !== undefined && mess !== ''){
        toast.error(mess)
    }
}

export const toastSuccess = (message) => {
    toast.success(message)
}

export const toastSuccessBottomRight = (message) => {
    toast(`🦄 ${message} !`, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}