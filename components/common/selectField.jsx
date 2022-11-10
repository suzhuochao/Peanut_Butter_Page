export const SelectField = ({ label, value, setValue, option, optionValueKey, optionLabelKey, hideBlankOption }) => <>
    <div className="form-group mb-3">
        <label htmlFor="value">{label}</label>
        <select name="value" id="value" className="form-control" value={value} onChange={event => setValue(event.target.value)}>
            {!hideBlankOption && <option></option>}
            {option.map(option =>
                <option
                    key={option[optionValueKey]}
                    value={option[optionValueKey]}>
                    {option[optionLabelKey]}
                </option>
            )}
        </select>
    </div>
</>