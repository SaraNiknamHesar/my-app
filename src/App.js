import React from 'react';
import Banner from './banner/Banner';
import Header from './header/Header';
import './App.css';


export default function App() {
    return (
        <div className="all-component">
            <Banner text_header="Preview: Kasuka single page HTML" btn_text="Buy and Download"></Banner>
            <Header></Header>
        </div>
    )
}