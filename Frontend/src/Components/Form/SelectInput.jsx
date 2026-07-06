export default function SelectInput({
    label,
    name,
    value,
    onChange,
    options,
    optionLabel,
    optionValue
}) {
    return (
        <div className="flex flex-col gap-1 mb-4">

            {label && (
                <label htmlFor={name} className="font-medium">
                    {label}
                </label>
            )}

            <select
                className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            >
                <option value="">Select</option>

                {options.map(option => (
                    <option
                        key={option[optionValue]}
                        value={option[optionValue]}
                    >
                        {option[optionLabel]}
                    </option>
                ))}

            </select>

        </div>
    );
}