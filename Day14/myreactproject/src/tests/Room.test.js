import { render, screen } from '@testing-library/react';
import user from "@testing-library/user-event";
import Room from '../components/bookings/Room'; 
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';  // Jest

// test('Room Test Case 1 textfeild input', () => {
//     render(<BrowserRouter><Room /></BrowserRouter>);
//     const t1 = screen.getByRole('textbox');  
    
//     user.type("5");
//     expect(screen.getByRole('textbox')).toHaveValue("5");
// });

test('Room Test Case 1 textfeild input', () => {
    render(<BrowserRouter><Room /></BrowserRouter>);
    
    const f1 = jest.fn();

    expect(screen.getByRole('textbox')).toHaveValue("5");
});

//Snapshot Test
test('2 Snapshot Test', () => {
    const tree = 
    renderer.create( <BrowserRouter><Room /></BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
});

//Enzyme is another React Testing library
// RSW - mock server for React Tests
