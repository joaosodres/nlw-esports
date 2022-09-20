
import { MagnifyingGlassPlus } from "phosphor-react";

import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {
    return (
        <div className='pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden '>
            <div className='bg-[#2A2634] px-8 py-6 grid md:flex justify-between items-center'>

                <div>
                    <strong className='text-2xl text-white  font-black block'>Não encontrou seu duo?</strong>
                    <span className='text-zinc-400'>Publique um anúncio para encontrar novos players.</span>
                </div>

                <Dialog.Trigger className='md:py-3 md:px-4 p-5 justify-center bg-violet-500 text-white rounded hover:bg-violet-600 transition duration-500 flex gap-3 items-center'>
                    <MagnifyingGlassPlus size={24} />
                    Publicar anúncio
                </Dialog.Trigger>

            </div>

        </div>
    );
}