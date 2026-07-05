export default function PrimaryButton({value, className , ...props}) {
	return (
		<button className={`px-2 py-1 rounded-xl ${className}`} onClick={props.onClick}>{value}</button>
	)
}