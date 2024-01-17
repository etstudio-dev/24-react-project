/*
Appel de la fonction input a la deuxieme div qui racourci le code a écrire
*/
import Input from "./Input.jsx"
import Button from "./CustomButton.jsx"
export default function NewProject() {
    return <div className="w-[35rem] mt-16 " >
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950">Save</button></li>
            <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"> Cancel </button></li>
        </menu>
        <div>
            <p>
                <label>Title</label>
                <Input />
                <label>Description</label>
                <Input />
                <label>date</label>
                <Input />
            </p>
        </div>
    </div>
}