import {render} from '@testing-library/react';
import Header from '../header';

test('Logo should render on Load', () => {
    const header = render(<Header />);
    console.log(header);
}
);

