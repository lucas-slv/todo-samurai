import React, { useState } from "react";
import "./App.css";

export function App() {
    const [value, setValue] = useState("");

    function handleQuery(event) {
        const query = event.target.value;
        setValue(query);
    }

    function erase() {
        setValue("");
    }

    function handleSubmitInput(event) {
        if (event.which === 13) {
            console.log(value);
        } else if (event.which === 27) {
            erase();
        }
    }

    return (
        <section id="app" className="container">
            <h1 className="title">todo</h1>

            <section className="main">
                <input
                    className="new-todo"
                    type="text"
                    placeholder="O que precisa ser feito ?"
                    value={value}
                    onChange={handleQuery}
                    onKeyDown={handleSubmitInput}
                />
            </section>
        </section>
    );
}
