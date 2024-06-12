import React, { useRef, useState } from "react";
import { useAuth } from "../../../context/auth-context";
import { useNavigate } from "react-router-dom";
import Section from "../../UI/Section";
import Title from "../../UI/Title";
import { Link } from "react-router-dom";
import AuthImage from "../../../images/auth.png";

export default function Signup() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      
      await signup(firstNameRef.current.value, lastNameRef.current.value, phoneRef.current.value, emailRef.current.value, passwordRef.current.value);
      
      navigate("/");
    } catch {
      setError("Nie udało się stworzyć konta.");
    }

    setLoading(false);
  }

  return (
    <Section classNames="animate-slide-down p-8">
      <div className="relative mx-auto">
        <img
          src={AuthImage}
          alt="Blog Image"
          className="mt-[50px] max-w-[700px] w-full"
        />
        <Title classNames="absolute top-[50%] left-[30%] text-shadow-white max-w-[350px] sm:text-[70px] text-[50px]">
          Stwórz Konto
        </Title>
      </div>

      {/* ERROR BOX */}
      <div className="mx-auto text-red-400 h-[30px]">{error && <p>{error}</p>}</div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[400px] mx-auto w-full mt-[70px] gap-[20px]"
      >
        <input
          type="text"
          ref={firstNameRef}
          required
          placeholder="Imię"
          className="input"
        />
        <input
          type="text"
          ref={lastNameRef}
          required
          placeholder="Nazwisko"
          className="input"
        />
        <input
          type="text"
          ref={phoneRef}
          placeholder="Telefon (opcjonalnie)"
          className="input"
        />
        <input
          type="email"
          ref={emailRef}
          required
          placeholder="Email"
          className="input"
        />
        <input
          type="password"
          ref={passwordRef}
          required
          placeholder="Hasło"
          className="input text-slate-500 hover:text-slate-400"
        />
        <button
          disabled={loading}
          type="submit"
          className="button rounded-lg mx-auto px-5 py-2"
        >
          Stwórz
        </button>
      </form>

      <div className="flex gap-[10px] mx-auto mt-[30px] mb-[140px]">
        <p>Masz już konto?</p>
        <Link to="/login" className="text-slate-800 underline">
          Zaloguj się
        </Link>
      </div>
    </Section>
  );
}
