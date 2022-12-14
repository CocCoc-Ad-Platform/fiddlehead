import {jsx, render, useState} from "core.pkg";

function YourAd({ count, setCount }) {
    const [layout, setLayout] = useState("cat");

    return (
        <form
            className="YourAd"
            style={{ padding: "16px", border: "1px solid #ccc" }}
        >
            <input
                type="checkbox"
                checked={layout === "cat"}
                onChange={(ev) => setLayout(ev.target.checked ? "cat" : "dog")}
            />
            <main>
                {layout === "cat" && <div-cat className="Cat" style={{display: 'block'}}>spam Render Cat</div-cat>}
                {layout === "dog" && <div-dog className="Dog" style={{display: 'block'}}>spam Render Dog</div-dog>}
            </main>
            <button
                type="button"
                onClick={() => {
                    setCount((count) => count + 1);
                }}
            >
                Update count
            </button>
        </form>
    );
}

function MyAd() {
    const [count, setCount] = useState(1);

    return (
        <article className="MyAd">
            {'Count ' + count}
            <YourAd count={count} setCount={setCount} />
        </article>
    );
}

render(<MyAd />, document.getElementById("root"));
