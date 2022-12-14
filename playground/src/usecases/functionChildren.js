import {jsx, render, useState, useEffect, useRef} from "core.pkg";

function Form({children}) {
    return (
        children(10)
    );
}

function DemoWrapperWrapper() {
    return (
        <main>
            {
                <Form>
                    {(count) => {
                        return `Count ${count}`;
                    }}
                </Form>
            }
        </main>
    );
}

render(<DemoWrapperWrapper />, document.getElementById('root'));
