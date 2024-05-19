import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event"
import { render, screen } from "@testing-library/react"

describe('Greeting component', () => {
  test('renders "Hello World" as a text', () => {
    //Arrange
    render(<Greeting />);
    //Act
  
    //Assert
    const helloWorld = screen.getByText('Hello World',{exact: false});
    expect(helloWorld).toBeInTheDocument();
  });
  test('renders "good to see you" if the button was not clicked', () => {
    render(<Greeting />);  
    const parel = screen.getByText('good to see you');
    expect(parel).toBeInTheDocument();
  });
  test('renders "See you later" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)
    
    const text = screen.getByText('See you later');
    expect(text).toBeInTheDocument();
  });
  test('NOT renders "good to see you" if the button was clicked', () => {
    render(<Greeting />);  

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    const parel = screen.queryByText('good to see you', {exact: false});
    expect(parel).toBeNull();
  });
})