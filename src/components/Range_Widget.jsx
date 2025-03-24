import Slider from "rc-slider";


// Custom Slider Widget
export const RangeWidget = ({ value, onChange, options }) => {
    return (
        <div className="form-group">
            <Slider
                min={options.min}
                max={options.max}
                value={value}
                onChange={onChange}
            />
            <div className="mt-2">
                <strong>Selected Value:</strong> {value}
            </div>
        </div>
    );
};