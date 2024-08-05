import { fireEvent, render,screen } from "@testing-library/react";
import Resturant from "../components/Resturant";
import RES from "./mock_data/MOCK_DATA_RES";
import { act } from "react";
import "@testing-library/jest-dom"
import Menu from "../components/Menu";
import { Provider } from "react-redux";
import appstore from "../utils/appstore";
import Heading from "../components/Heading";
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(RES);
        },
    });
});
test("rendering Menu", async ()=>{
   await act(async ()=>{
     render(
        <BrowserRouter>
        <Provider store={appstore}>
     <Resturant/>
     <Heading/>
     </Provider>
     </BrowserRouter>
    );
   });
   const but = screen.findAllByTestId("downbut");
   const buttons = (await but)[0];
   fireEvent.click(buttons);
   const ops = screen.getAllByRole("button",{name:"ADD"});
   console.log(ops.length);
   fireEvent.click(ops[0]);
   const car = await screen.findByText("Cart (1)");
   expect(car).toBeInTheDocument();
}) 