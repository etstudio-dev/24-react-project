import Button from './CustomButton.jsx';
import button from './CustomButton.jsx';

export default function ProjectsSlidebar() {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Projets</h2>
            <div>
                <Button>
                    ajouter un projet
                </Button>
            </div>


            <ul>

            </ul>
        </aside>
    )
}
