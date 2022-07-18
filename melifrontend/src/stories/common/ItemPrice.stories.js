
import ItemPrice from "../../components/common/ItemPrice";
import { withRouter } from 'storybook-addon-react-router-v6';


export default {
    title: "ItemPrice",
    component: ItemPrice,
    decorators: [withRouter],
    parameters: {
      reactRouter: {
        routePath: '/',
      }
    }
  };

const props = {
    price: "1200",
    id: "MLA919970533",
    free_shipping: true,
}
export const Component = () => <ItemPrice price={props.price} id={props.id} free_shipping={props.free_shipping}/>;