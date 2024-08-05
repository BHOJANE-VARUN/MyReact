import "@testing-library/jest-dom";
import { fireEvent, render,screen } from "@testing-library/react";
import Heading from "../components/Heading";
import { Provider } from "react-redux";
import appstore from "../utils/appstore";
import { BrowserRouter } from "react-router-dom";
test("Cart render",()=>{
    render(
    <BrowserRouter>
    <Provider store={appstore}>
        <Heading/>
    </Provider>
    </BrowserRouter>
    );
    const login = screen.getByRole("button",{name:"login"});
    fireEvent.click(login);
    const logout = screen.getByRole("button",{name:"logout"});
    expect(login).toBeInTheDocument();
})