import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { Button } from "../Button";
import formatCurrency from "../../utils/formatCurrency";
import { useCart } from "../../hooks/CartContext";
import apiQdLanches from "../../services/api";
import { toast } from "react-toastify";

export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0)
    const [deliveryTax] = useState(5)
    const { cartProducts } = useCart()

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)

        setFinalPrice(sumAllItems)
    }, [cartProducts])

    const submitOrder = async () => {
        const order = cartProducts.map(product => {
            return { id: product.id, quantity: product.quantity }
        })
        
        try {
            await toast.promise(apiQdLanches.post('orders', { products: order }), {
                pending: 'Realizando seu pedido...',
                success: 'Pedido realizado com sucesso',
                error: 'Falha ao tentar realizar seu Pedido'
            })

        } catch (error) {
            console.error("Erro ao realizar o pedido", error)
            toast.error('Ocorreu um erro inesperado, tente novamente mais tarde.')
        }

    }

    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo do pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatCurrency(finalPrice)}</p>
                    <p className="tax">Taxa de entrega</p>
                    <p className="tax-price">{formatCurrency(deliveryTax)}</p>
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p>{formatCurrency(finalPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button style={{ width: "100%", marginTop: 30 }} onClick={submitOrder}>
                Finalizar Pedido
            </Button>
        </div>
    )
}