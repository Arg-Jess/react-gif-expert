import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

// Importar sin el archivo barril de index
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

const [categories, setCategories] = useState(['One Punch']);

const onAddCategory = ( newCategory ) => {
    // Valorant
    //Forma 1
    //categories.push(newCategory);
    if ( categories.includes(newCategory)) return;

    setCategories([newCategory,...categories]);

}


  return (
    <>

        <h1>GifExpertApp</h1>

        <AddCategory 
            // setCategories={setCategories}
            onNewCategory={ value => onAddCategory(value) }
        />

        <button onClick={onAddCategory}>Agregar</button>

        {
            categories.map(( category) => (
                <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
        }

    </>
  )
}
