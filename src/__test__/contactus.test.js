const { render, screen } = require("@testing-library/react");
import "@testing-library/jest-dom";
import Contact from "../components/Contact_us";
describe("Rendering Contact us page",()=>{
    it("Email rendered",()=>{
        render(<Contact/>);
        const number = screen.getAllByRole("heading");
       // console.log(number[0]);
        expect(number[0]).toBeInTheDocument();
    });
    it("Instagram rendered",()=>{
        render(<Contact/>);
        const number = screen.getAllByRole("heading");
       // console.log(number[0]);
        expect(number[1]).toBeInTheDocument();
    });
    it("Linkedln rendered",()=>{
        render(<Contact/>);
        const number = screen.getAllByRole("heading");
        //console.log(number[0]);
        expect(number[2]).toBeInTheDocument();
    });
    it("Number rendered",()=>{
        render(<Contact/>);
        const number = screen.getAllByRole("heading");
       // console.log(number[0]);
        expect(number[3]).toBeInTheDocument();
    });
})
