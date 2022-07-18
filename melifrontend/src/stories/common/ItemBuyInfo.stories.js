import ItemBuyInfo from "../../components/common/ItemBuyInfo";

export default {
    title: "ItemBuyInfo",
    component: ItemBuyInfo,
}

const items= {
        condition: "new",
        sold_quantity: 5000,
        item: {
            title: "Titulo del producto",
            price: {
                amount: 1000,
            }
        },
}


export const Component = () => <ItemBuyInfo items={items}/>