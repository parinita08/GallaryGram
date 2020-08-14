import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore} from '../firebase/config';
import { storage } from 'firebase';

const useStorage = (file) => {

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //references : ehere the uploaded image should be saved.
        const storageRef = projectStorage.ref(file.name);

        storageRef.put(file).on('state_changed',(snap) => {
            let percentage = (snap.bytesTransferred/snap.totalBytes)*100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async() => {
            const url = await storageRef.getDownloadURL;
            setUrl(url);  
        })
    },[file]);

    return{progress, url, error}

}

export default useStorage;