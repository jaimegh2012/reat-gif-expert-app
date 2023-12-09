import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['groot']);

    const onAddCategory = (valueNewCategory) => {

        if (categories.includes(valueNewCategory)) return;

        setCategories([valueNewCategory, ...categories]);
    };
  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
        onNewCategory = {(value) => onAddCategory(value)}
        />
        {
            categories.map(categoria =>
                <GifGrid key = {categoria} category={categoria}/>
            )
        }
    </>
  )
}
