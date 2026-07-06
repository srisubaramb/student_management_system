export default function PrimaryButton({
    value,
    className = "",
    ...props
}) {
    return (
        <button
            className={`bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
            {...props}
        >
            {value}
        </button>
    );
}