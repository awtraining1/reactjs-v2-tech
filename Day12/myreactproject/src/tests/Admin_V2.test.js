import { render, screen } from '@testing-library/react';
import Admin_v2 from '../components/Admin_v2';

test('Admin V2 Test Case 1 renders Admin Details content', () => {
    render(<Admin_v2 />);
    const adminDetailsText = screen.getByText(/Admin Details/i);
    expect(adminDetailsText).toBeInTheDocument();
});

test('2 renders Admin default timings content', () => {
    render(<Admin_v2 />);
    const adminDefaultTimingText = screen.getByText(/Admin Timings: START TIME: 2pm, END TIME : 5pm/i);
    expect(adminDefaultTimingText).toBeInTheDocument();
});

test('3 renders Admin default timings content', () => {
    render(<Admin_v2 name="Tushar V2" />);
    const adminDefaultTimingText = 
    screen
    .getByRole('heading', {level:2, name: /Tushar V2 from Admin/i});
    
    expect(adminDefaultTimingText).toBeInTheDocument();
});

test('4 button with "ChANGE ADMIN TIMINGS" text', () => {
    render(<Admin_v2 name="Tushar V2" />);
    const adminDefaultTimingText = 
    screen
    .getByRole('button', {name: /ChANGE ADMIN TIMINGS/i});
    
    expect(adminDefaultTimingText).toBeInTheDocument();
});

//12C test case for "chest" text as a list item 
test('4 button with "ChANGE ADMIN TIMINGS" text', () => {
    render(<Admin_v2 name="Tushar V2" wards={["chest", "surgery", "diabetic"]} />);
    const adminListText = 
    screen
    .getByRole('listitem', {name: /chest/i});
    
    expect(adminListText).toBeInTheDocument();
});
