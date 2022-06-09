import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "./shared/firebase"
import { getDocs, where, query, collection } from "firebase/firestore"
import { Link } from "react-router-dom"

const Login = () => {

    const id_ref = React.useRef(null)
    const pw_ref = React.useRef(null)

    const loginFB = async () => {
        const user = await signInWithEmailAndPassword(
            auth,
            id_ref.current.value,
            pw_ref.current.value
        );

        console.log(user);

        const user_docs = await getDocs(query(
            collection(db, "users"), where("user_id", "==", user.user.email)
        ));

        user_docs.forEach(u => {
            console.log(u.data())
        })
    };


    return (
        <div>
            아이디(이메일): <input ref={id_ref} /> <br />
            비밀번호: <input ref={pw_ref} type="password" /> <br />
            <button onClick={loginFB}>로그인</button>
            <Link to="/Signup">
                <button>회원가입</button>
            </Link>
        </div>
    )
}

export default Login