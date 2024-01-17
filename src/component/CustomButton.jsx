/*
création du button en component
pour afficher le meme  css de tailwind sur tous
evitez le code répété dans chaque fichiers

cpnt bouton sur lequel ra,sfere les props et les enfants
*/

export default function Button ({children, ...props} ) {
    return (
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" {...props} >
            {children}
        </button>
    )
}