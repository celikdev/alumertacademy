import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import app from ".";

export const uploadImage = async (file: any, dirName) => {
    const storage = getStorage(app);
    const storageRef = ref(storage, `${dirName}/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
};