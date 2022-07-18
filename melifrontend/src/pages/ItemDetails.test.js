import React from "react";
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen, act, waitFor } from "@testing-library/react";
import ItemDetails from "./ItemDetails"
import "react-router-dom";
import { useParams } from "react-router-dom";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
    id: 'MLA919970533',})
}));

describe('Tesing ItemDetails component', ()=>{
    
    it('Should render: Button Comprar', async () => {
        await act(async () => render(<ItemDetails />));
        await waitFor(() => expect(screen.getByRole('button', { name: 'Comprar' })).toBeInTheDocument());
    })
    
    it('Should render: Imagen del producto', async () => {
        await act(async () => render(<ItemDetails />));
        await waitFor(() => expect(screen.getByAltText("item")).toBeInTheDocument());
    }) 

    it('Should render: Titulo descripcion', async () => {
        await act(async () => render(<ItemDetails />));
        await waitFor(() => expect(screen.getByRole('heading')).toHaveTextContent('Descripción del producto'));
    }) 

})
