const CheckBox = ({OverSeven,handleOverSevenChange}) => {
    return (
        <div>
            <div>
                Only over 7.0
                <input
                    type="checkbox"
                    checked={OverSeven}
                    onChange={handleOverSevenChange}
                />
            </div>
        </div>
    );
}

export default CheckBox;