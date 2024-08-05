import { render, screen } from "@testing-library/react"
import { Card, proCard } from "../components/Card"
import obj from "./mock_data/testData";
import "@testing-library/jest-dom";
test("rendering card",()=>{
    render(<Card dat={obj}/>);
    const ele = screen.getByText("Chinese Wok");
    expect(ele).toBeInTheDocument();
})
test("rendering Pro Card",()=>{
    const Prod = proCard(Card);
    render(<Prod datm={obj}/>);
    const hot = screen.getByText("HOT");
    expect(hot).toBeInTheDocument();
})