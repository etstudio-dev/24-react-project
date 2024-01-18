/*  import de l'image a afficher du dossier assets */

import { useState } from 'react';
import App from '../App.jsx';
import noProjectSelectedImg from '../assets/no-projects.png';
import Button from './CustomButton.jsx';
import NewProject from './NewProject.jsx';
/*
Component utiliser lors d'une non selection de projet

export default function ProjectNoSelected() ///// oublie  du parrametre
*/
export default function ProjectNoSelected({onStartAddProject}) {

    return (
        < div className='mt-24 text-center w-2/3' >
            <img src={noProjectSelectedImg} alt='Aucune tache séléctionné' className=" w-16 h-16 object-contain mx-auto " />
            <h2 className=" text-xl font-bold text-stone-500 my-4 ">selection de projet</h2>
            <p className='text-stone-400 mb-4' >veulliez selectionner un projet</p>
            <p className='mt-8'>
                <Button onClick={ onStartAddProject }>Créer un nouveau projet</Button>

            </p>
        </div >
    )
}
