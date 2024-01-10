import { ChangeEvent, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
} from "firebase/auth";

import { Contact } from "./components/Contact";
import { DataList } from "./components/DataList";
import { Header } from "./components/Header";
import LoginForm from "./components/LoginForm";
import { Subscription } from "./components/Subscription";
import { Timer } from "./components/Timer";
import { auth } from "./config/firebase";

import { useCreateCollection } from "./hooks/firestore";
import { useLocation } from "./hooks/useLocation";

import "./App.css";

function App() {
  const { page } = useLocation();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);

  const { createCollection } = useCreateCollection();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const setUserEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };

  const setUserPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };

  const registerHandler = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );

      if (user?.user?.uid) {
        createCollection(user?.user?.uid);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async () => {
    try {
      await signInWithEmailAndPassword(auth, userEmail, userPassword);
    } catch (error) {
      console.log(error);
    }
  };

  const signOutHandler = async () => {
    await signOut(auth);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        {page === "/" ||
          (page === "/login" && (
            <>
              <LoginForm />
              <div>
                <input
                  placeholder="user email"
                  onChange={setUserEmailHandler}
                  value={userEmail}
                />
                <input
                  placeholder="password"
                  onChange={setUserPasswordHandler}
                  value={userPassword}
                />
              </div>
              <button onClick={registerHandler}>Register</button>
              <button onClick={loginHandler}>Login</button>
              <div>
                {user?.email}
                <p>{user?.uid}</p>
                <button onClick={signOutHandler}>Sign Out</button>
              </div>
            </>
          ))}
        {page === "/pricing" && <Subscription />}
      </div>

      {page === "/timer" && (
        <>
          <div className="card">
            <DataList />
          </div>

          <div className="card">
            <Timer />
          </div>
        </>
      )}

      {page === "/contact" && <Contact />}
    </>
  );
}

export default App;
