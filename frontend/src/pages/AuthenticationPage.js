import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
    return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
    const searchParams = new URL(request.url).searchParams
    const mode = searchParams.get("mode") || "login"
    if (mode !== "login" && mode !== "signup") {
        throw json({ message: "unsupported mode" }, { status: 422 })
    }
    const response = await request.formData()

    const authData = {
        email: response.get("email"),
        password: response.get("password")
    }

    const data = await fetch("http://localhost:8080" + mode, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authData)
    })

    if (data.status === 422 || data.status === 401) {
        return json
    }

    if (!data.ok) {
        throw json({ message: "Couldn't authnticate user." }, { status: 500 })
    }
    redirect("/")
}