import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';

describe('debe mostrar correctamente el componente', () => {
  test('debe mostrar correctamente', () => {
    let wraper = shallow(<GifGrid category={''} />);

    expect(wraper).toMatchSnapshot();
  });
});
