
import LinkItem from "../../components/common/LinkItem";
import { withRouter } from 'storybook-addon-react-router-v6';


export default {
    title: "LinkItem",
    component: LinkItem,
    decorators: [withRouter],
    parameters: {
      reactRouter: {
        routePath: '/',
      }
    }
  };

const props = {
    label: "Apple Macbook Air (13 Pulgadas, 2020, Chip M1, 256 Gb De Ssd, 8 Gb De Ram) - Gris Espacial",
    id: "MLA919970533",
}   
export const Component = () => <LinkItem id={props.id} label={props.label} />;