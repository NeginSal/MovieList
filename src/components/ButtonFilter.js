const ButtonFilter = ({handleDoneChange}) => {
    return (
        <div>
            <div>
                <button onClick={() => handleDoneChange("ALL")}>all</button>
                <button onClick={() => handleDoneChange("DONE")}>done</button>
                <button onClick={() => handleDoneChange("UNDONE")}>undone</button>
            </div>
        </div>
    );
}

export default ButtonFilter;