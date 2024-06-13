export default function ListPicker({ values }) {
    const randIdx = Math.floor(Math.random() * values.length);
    console.log(randIdx);
    const randElement = values[randIdx];
    console.log(randElement);
    return(
        <div>
            <p>The list of values: {values.join(', ')}</p>
            <p>Random element is: {randElement}</p>
        </div>
    )
}