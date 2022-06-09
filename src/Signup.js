import React from "react"
import { auth, db, storage } from "./shared/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"
import { getDownloadURL, ref, uploadBytes} from "firebase/storage"


const Signup = () => {
    const id_ref = React.useRef(null)
    const name_ref = React.useRef(null)
    const pw_ref = React.useRef(null)    

    const signupFB = async () => {

        const user = await createUserWithEmailAndPassword(
            auth,
            id_ref.current.value,
            pw_ref.current.value,
        );
        console.log(user)

        const user_data = await addDoc(collection(db, "users"), {
            user_id: user.user.email,
            name: name_ref.current?.value,
            
        });

        console.log(user_data.id);
    }

    const uploadFB = async (e) => {
        console.log(e.target.files)
        const uploaded_file = await uploadBytes(ref(storage, `images/${e.target.files[0].name}`),
        e.target.files[0]        
        )
        console.log(uploaded_file)

        const file_url = await getDownloadURL(uploaded_file.ref)

        console.log(file_url)

    }

    return (
        <div>
            아이디(이메일): <input ref={id_ref} /> <br />
            이름: <input ref={name_ref} /> <br />
            비밀번호: <input ref={pw_ref} type="password"/> <br />
            <button onClick={signupFB}>가입</button>
        </div>
    )
}

export default Signup