import axiosHisEmr from './axiosHisEmr'


export default async function uploadFile(files, mrNumber, docType ) {
    try {
        const data = new FormData()
        data.append('docType', docType)
        data.append('mrNumber', mrNumber)
        data.append('files', files)
        let url = `/aws/s3/upload`

        let res = await axiosHisEmr.post(url, data)
        return res
    } catch (error) {
        throw error
    }
}   