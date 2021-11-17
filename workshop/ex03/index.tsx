import { withRouter } from 'react-router';
import { connect, useDispatch } from 'react-redux';

import { Superbigcomponent } from './superbigcomponent';

const Ex03 = ({ user, location = { pathname: '' } }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Superbigcomponent />
      <span>Bonjour {user}</span>
      <span>Router is : {`${location?.pathname}`}</span>
      <button onClick={() => dispatch({ type: 'DISPATCHING' })}>
        Click me !
      </button>
    </div>
  );
};

export const Ex03Router = connect((state: any) => ({ user: state.user }))(
  withRouter(Ex03 as any)
);

export default connect((state: any) => ({ user: state.user }))(Ex03);
