import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className="filter_menu">
            <div className="row">
                <span style={{color:"white"}}>Filtres: </span>
                <select name="category" value={category} onChange={handleCategory} >
                    <option value=''>Tout les produits</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input type="text" value={search} placeholder="Chercher..."
            onChange={e => setSearch(e.target.value.toLowerCase())} />

            <div className="row sort">
                <span style={{color:"white"}}>Trier par : </span>
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Le plus récent</option>
                    <option value='sort=oldest'>Le plus ancien</option>
                    <option value='sort=-sold'>Les meilleures ventes</option>
                    <option value='sort=-price'>Prix: Haut-Bas</option>
                    <option value='sort=price'>Prix ​​: Bas-Hauteur</option>
                </select>
            </div>
        </div>
    )
}

export default Filters
