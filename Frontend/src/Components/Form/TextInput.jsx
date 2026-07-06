export default function TextInput({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder
}) {
    return (
        <div className="flex flex-col gap-1 mb-4">
            {label && (
                <label htmlFor={name} className="font-medium">
                    {label}
                </label>
            )}

            <input
                className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                type={type}
                id={name}
                name={name}
                value={value ?? ""}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}