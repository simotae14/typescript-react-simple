import { ChildAsFC } from './Child';

const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log('clicked')}>
    test
  </ChildAsFC>;
};

export default Parent;