import { render, screen } from '@testing-library/react';
import App from './App';
import Admin_v2 from './components/Admin_v2';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Address: XYZ/i);

//   expect(linkElement).toBeInTheDocument();
// });

test('renders Address: XYZ content', () => {
    render(<App />);
    const linkElement = screen.getByText(/Address: XYZ/i);

    expect(linkElement).toBeInTheDocument();
});

//12B Add one more test case for App component  
test('App Component Test Case 2: renders Hello World content', () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello World/i);

    expect(linkElement).toBeInTheDocument();
});


test('Test Case 3 renders Phone Number: 123 content', () => {
    render(<App />);
    const linkElement = screen.getByText(/Phone Number: 123/i);
    expect(linkElement).toBeInTheDocument();
});

test('Test Case 3 renders Phone Number: 123 content', () => {
    render(<App />);
    const linkElement = screen.getByText(/Phone Number: 123/i);
    expect(linkElement).toBeInTheDocument();
});


test('Admin V2 Test Case 1 renders Admin Details content', () => {
    render(<Admin_v2 />);
    const adminDetailsText = screen.getByText(/Admin Details/i);
    expect(adminDetailsText).toBeInTheDocument();
});




