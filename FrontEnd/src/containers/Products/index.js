import React, { useEffect, useState } from "react";
import ProductsLogo from '../../assets/ProductsImg.jpg'
import { Container, ProductsImg, CategoryButton, CategoriesMenu, ProductsContainer } from "./styles";
import api from '../../services/api'
import CardProducts from "../../components/CardProduct";

function Products() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    const [activeCategory, setActiveCategory] = useState(0)


    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data]
            setCategories(newCategories)
        }

        loadCategories()

        async function loadProducts() {
            const { data } = await api.get('products')

            console.log(data)
            setProducts(data)
        }

        loadProducts()
        loadCategories()
    }, [])

    return (
        <Container>
            <ProductsImg src={ProductsLogo} alt="HomeLogo" />
            <CategoriesMenu>
                {categories && categories.map(category => (
                    <CategoryButton
                        type="button"
                        key={category.id}
                        isActiveCategory={activeCategory === category.id}
                        onClick={() => {
                            setActiveCategory(category.id)
                        }}
                    >
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoriesMenu>
            <ProductsContainer>
                {products && products.map(product => (
                    <CardProducts key={product.id} product={product} />
                ))}
            </ProductsContainer>
        </Container>
    )

};

export default Products