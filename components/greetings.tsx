"use client"
import useTypingEffect from "./useTypingEffect";

export default function Greetings() {
    const greetings = [
        "Hi", // English
        "Hello", // English
        "¡Hola", // Spanish
        "Bonjour", // French
        "Ciao", // Italian
        "Olá", // Portuguese
        "Hallo", // German
        "Привет", // Russian
        "你好", // Chinese (Mandarin)
        "こんにちは", // Japanese
        "여보세요", // Korean
        "नमस्ते", // Hindi
        "Salam", // Arabic
        "Sawubona", // Zulu (South Africa)
        "Kamusta", // Filipino (Tagalog)
    ];
    const greeting = useTypingEffect(greetings, 150, 75, 2000);
    return (
        <>
            {greeting}
            <span className="w-1 h-full absolute bg-[rgb(255,255,255)] animate-blinking"></span>
        </>
    )

}