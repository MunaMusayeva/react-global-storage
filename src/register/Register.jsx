import Form from "../common/Form"
import { useNavigate } from "react-router"
import { themeStore } from '../common/Store'
import { ThemeContext } from '../App'
import { useStore } from 'zustand'

const Register = () => {
    const navigate = useNavigate()
    const { theme, toggle } = useStore(themeStore)
    const formItems = [
        {
            name: "firstname",
            label: "Firstname",
            type: "text",
            placeholder: "Enter your firstname"
        },
        {
            name: "lastname",
            label: "Lastname",
            type: "text",
            placeholder: "Enter your lastname"
        },
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
            title: "Register",
            style: "bg-blue-600 text-white py-3 rounded-md",
            action: () => {}
        },
        {
            title: "Already have an account?",
            style: "",
            action: () => {
                navigate("/login")
            }
        },
    ]

    return (
        <div className={`w-full h-screen ${theme === "light" ? "bg-white" : "bg-zinc-500"}`}>
            <Form formItems={formItems} buttons={buttons} />

        </div>
    )
}

export default Register