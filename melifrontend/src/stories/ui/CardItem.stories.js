import CardItem from "../../components/ui/CardItem"
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
    title: "CardItem",
    component: CardItem,
    decorators: [withRouter],
    parameters: {
      reactRouter: {
        routePath: '/',
      }
    }
  };

const itemProps= {
    price: "1211",
    title: "Apple Macbook Air (13 Pulgadas, 2020, Chip M1, 256 Gb De Ssd, 8 Gb De Ram) - Gris Espacial",
    thumbnail: "http://http2.mlstatic.com/D_801112-MLA46516512347_062021-I.jpg",
    address: {
        state_name: "Capital Federal",
      },
      shipping: {
       free_shipping: true,
      },
}

export const Component = () => <CardItem itemProps={itemProps}/>


