
import ItemTitle from "../../components/common/ItemTitle";
import { withRouter } from 'storybook-addon-react-router-v6';


export default {
    title: "ItemTitle",
    component: ItemTitle,
    decorators: [withRouter],
    parameters: {
      reactRouter: {
        routePath: '/',
      }
    }
  };

const props = {
    title: "Apple Macbook Air (13 Pulgadas, 2020, Chip M1, 256 Gb De Ssd, 8 Gb De Ram) - Gris Espacial",
    id: "MLA919970533",
}   
export const Component = () => <ItemTitle title={props.title} id={props.id} />;