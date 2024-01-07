import { ChangeEvent, useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
} from "firebase/auth";

import { DataList } from "./components/DataList";
import { Timer } from "./components/Timer";
import reactLogo from "./assets/react.svg";
import { auth } from "./config/firebase";

import { useCreateCollection } from "./hooks/firestore";

import "./App.css";

function App() {
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
      <div>
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
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <DataList />
      </div>
      <div className="card">
        <Timer />
      </div>
    </>
  );
}

export default App;
