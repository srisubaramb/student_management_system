export default function RadioGroup({
    label,
    name,
    value,
    onChange,
    options
}) {
    return (
        <div className="mb-4">

            <p className="font-medium mb-2">
                {label}
            </p>

            <div className="flex gap-5">

                {options.map(option => (
                    <label
                        key={option.value}
                        className="flex items-center gap-2"
                    >
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={value === option.value}
                            onChange={onChange}
                        />

                        {option.label}
                    </label>
                ))}

            </div>

        </div>
    );
}