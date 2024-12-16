import React from 'react'
import Form from '../common/Form'
import { useNavigate } from "react-router"
import { ThemeContext } from '../App'
import { useStore } from 'zustand'
import { themeStore } from '../common/Store'

const Login = () => {
    const navigate = useNavigate()
    const { theme, toggle } = useStore(themeStore)

    const formItems = [
        {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter your email"
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter a password"
        },

    ]

    const buttons = [
        {
            title: "Login",
            style: "bg-blue-600 text-white py-3 rounded-md",
            action: () => {
            }
        },
        {
            title: "Don't have an account?",
            style: "",
            action: () => {
                navigate("/register")
            }
        },
        {
            title: "Forgot password?",
            style: "text-red-600",
            action: () => { }
        },
    ]

    return (
        <div className={`w-full h-screen ${theme === "light" ? "bg-white" : "bg-zinc-500"}`}>
            <Form formItems={formItems} buttons={buttons} />

        </div>
    )
}

export default Login