//anytime we want to get Firestore data from a collection we can use this hook
import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => { //everytime a new image is added, snap makes a note of it from the databse
                let documents = [];
                snap.forEach(docs => {
                    documents.push({...docs.data(), id: docs.id});
                });
                setDocs(documents);
            });

        return () => unsub();

    }, [collection])

    return{ docs };
}

export default useFirestore;