export const TextAreaField = ({label, value, setValue}) => <>
    <div className="form-group mb-3">
        <label htmlFor="value">{ label }</label>
        <textarea type="textarea" name="value" id="value" className="form-control" rows="4"
                value={ value }
                onChange={ event => setValue(event.target.value) }></textarea>
    </div>
</>