import React from "react"
import { auth, db, storage } from "./shared/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"
import { getDownloadURL, ref, uploadBytes} from "firebase/storage"


const AddCard = () => {

    return (
        <div>
            이미지: <br />
            내용: <br />
            <button>게시</button>
        </div>
    )
}

export default AddCard