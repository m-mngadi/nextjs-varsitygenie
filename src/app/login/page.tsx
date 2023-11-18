"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation'


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const router = useRouter();

    async function handleLoginForm(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault();
        setLoginError(false);
        setLoginInProgress(true);

        const res = await signIn("credentials", { email, password, redirect: false });
        if (!res?.ok) {
            setLoginError(true);
        } else {
            setLoginInProgress(false);
            router.replace("/");
        }

        setLoginInProgress(false);
    }

    return (
        <main className="flex flex-col min-h-screen">
            <section className="w-screen min-h-screen bg-white max-w-7xl mx-auto">
                <div className="flex justify-center my-6">
                    <h1 className="text-3xl font-bold text-[#1E1E1E]">Login</h1>
                </div>
                <div className="mx-auto max-w-md px-4">
                    <form onSubmit={handleLoginForm} className="flex flex-col gap-3">
                        <input className="px-4 py-2 rounded-md bg-slate-100 border-2 border-slate-300 outline-2 outline-blue-500/50" type="email" name="email" placeholder="email" autoComplete="email" value={email} onChange={ev => setEmail(ev.target.value)} disabled={loginInProgress} />
                        <input className="px-4 py-2 rounded-md bg-slate-100 border-2 border-slate-300 outline-2 outline-blue-500/50" type="password" name="password" placeholder="password" autoComplete="current-password" value={password} onChange={ev => setPassword(ev.target.value)} disabled={loginInProgress} />
                        <button type="submit" className="px-4 py-2 rounded-md bg-[#E84100] text-center text-white text-lg" disabled={loginInProgress}>Login</button>
                    </form>
                    {loginError && (
                        <h1 className="text-lg text-rose-500 mt-2">Credentials do not match with provided email.</h1>
                    )}
                </div>
            </section>
        </main>
    )
}