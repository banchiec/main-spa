import { fetchSingleUpload } from "./fetchSingleUpload";

export const fetchSingleUploadQuery = (imagePath:string) => ({
	queryKey: [`single-upload-${imagePath}`],
	queryFn: () => fetchSingleUpload(imagePath),
})
