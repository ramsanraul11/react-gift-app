import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Skate', 'Dragon Ball'];
    const [categories, setCategories] = useState(['']);

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'TestNew'] );
    //     setCategories( cats => [...cats, 'NewItem'] );
    // };
    return (
        <>
            <h2>
                GifExpertAPP
            </h2>
            <AddCategory setCategories = {setCategories}/>
            <hr />



            <ol>
                {
                    categories.map((category, i) => (
                        // return <li key={category}>{category}</li>
                        <GifGrid 
                            key={category}
                            category = {category}
                        />
                    ))
                }
            </ol>
        </>
    )
};
