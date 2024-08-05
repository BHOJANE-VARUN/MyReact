import { BrowserRouter, json } from "react-router-dom";
import MOCK_DATA from "./mock_data/BodyMockData";
import { act } from "react";
import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../components/Body";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    });
});
test("Searching resturants", async ()=>{
    await act(async()=>{
        render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>)
    });
    const rest = screen.getAllByTestId("res");
    expect(rest.length).toBe(20);
    const but = screen.getByTestId("search");
    fireEvent.change(but,{target:{value:"pizza"}});
    const afterrest = screen.getAllByTestId("res");
    expect(afterrest.length).toBe(3);
})
test("filter button",async ()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    });
    const fil = screen.getByTestId("filter");
    fireEvent.click(fil);
    const after = screen.getAllByTestId("res");
    expect(after.length).toBe(19);
})