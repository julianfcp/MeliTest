import SearchBar from "../../components/ui/SearchBar"
import { withRouter } from 'storybook-addon-react-router-v6';
import { withReactContext } from 'storybook-react-context';
import { QueryContext } from '../../hooks/QueryContext';

export default {
    title: "SearchBar",
    component: SearchBar,
    decorators: [
        withRouter,
        withReactContext({
            Context: QueryContext,
            initialState: { query: "Apple" },
          }),
    ],
    parameters: {
      reactRouter: {
        routePath: '/',
      }
    }
  };



export const Component = () => <SearchBar />


