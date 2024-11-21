import React, { useState, useEffect } from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../services/ProductService'
import { useNavigate } from 'react-router-dom'
import './SearchComponent.css' // Create this CSS file for styling

const SearchComponent = () => {
    const [search, setSearch] = useState('')
    const searchDebounce = useDebounce(search, 500)
    const navigate = useNavigate()

    const fetchSearchResults = async (search) => {
        const res = await ProductService.getAllProduct(search, 10)
        return res
    }

    const { data: searchResults } = useQuery({
        queryKey: ['searchResults', searchDebounce],
        queryFn: () => fetchSearchResults(searchDebounce),
        enabled: !!searchDebounce,
    })

    return (
        <div className="search-component">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for products..."
                className="search-input"
            />
            {searchResults?.data?.length > 0 && (
                <div className="search-suggestions">
                    {searchResults.data.map((product) => (
                        <div
                            key={product._id}
                            className="search-suggestion"
                            onClick={() => navigate(`/product/${product._id}`)}
                        >
                            <img src={product.image} alt={product.name} className="search-suggestion-image" />
                            <span className="search-suggestion-name">{product.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchComponent
