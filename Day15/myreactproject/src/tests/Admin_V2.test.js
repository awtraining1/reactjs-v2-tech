import { render, screen } from '@testing-library/react';
import user from "@testing-library/user-event";
import Admin_v2 from '../components/staff/Admin_v2';

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
            .getByRole('heading', { level: 2, name: /Tushar V2 from Admin/i });

    expect(adminDefaultTimingText).toBeInTheDocument();
});

test('4 button with "ChANGE ADMIN TIMINGS" text', () => {
    render(<Admin_v2 name="Tushar V2" />);
    const adminDefaultTimingText =
        screen
            .getByRole('button', { name: /ChANGE ADMIN TIMINGS/i });

    expect(adminDefaultTimingText).toBeInTheDocument();
});

//12C test case for "chest" text as a list item 
// test('4 list item with "chest" text', () => {
//     render(<Admin_v2 name="Tushar V2" wards={["chest", "surgery", "diabetic"]} />);
//     const adminListText =
//         screen
//             .getByRole('listitem', { name: /chest/i });

//     expect(adminListText).toBeInTheDocument();
// });

test('5 button click should increment the counter', () => {
    render(<Admin_v2 name="Tushar V2" wards={["chest", "surgery", "diabetic"]} />);

    //screen.debug();

    // Step1 First check the default value of counterV2 is 0
    const counterText =
        screen
            .getByText(/counterV2:0/i);

    expect(counterText).toBeInTheDocument();

    // Step2 Get a reference to the increment button 
    // and click it
    const counterIncrementV2Button =
        screen
            .getByRole('button', { name: /Increment Counter V2/i });

    user.click(counterIncrementV2Button);

    // Button click should have incremented the counter
    //const text1 = "counterV2:1".replace("\\r\\n","");
    const counterTextAfterButtonClick =
        screen
            .getByText(/counterV2:1/i);

    // Assert/Verify it really incremented
    expect(counterTextAfterButtonClick).toBeInTheDocument();
});

// 13A Write a test case for admin timings change button click
// functionality
// 
