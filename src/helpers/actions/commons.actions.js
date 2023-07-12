import axiosHisEmr from "../helpers/axiosHisEmr";
import { commonsConstants } from "./constants";


export const commonsUploadDocument = (form) => {
    return async (dispatch) => {
        dispatch({ type: commonsConstants.CREATE_UPLOAD_DOCUMENT_REQUEST });
        const res = await axiosHisEmr.post(`/api/commons/upload_document`, form);
        if (res.data.status === 200) {
            dispatch({
                type: commonsConstants.CREATE_UPLOAD_DOCUMENT_SUCCESS,
                payload: res.data,
            });
            return res.data;
        } else {
            dispatch({
                type: commonsConstants.CREATE_UPLOAD_DOCUMENT_FAILURE,
                payload: { error: res.data.error },
            });
            return res.data;
        }
    };
};

