import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            {/**Title */}
            <h1>GifExpertApp</h1>

            {/**INPUT */}
            <AddCategory onNewCategory={onAddCategory} />

            {/**Gif Listed */}
            <GifGrid categories={categories} />
            {/**GifItem */}
        </>
    )
}
