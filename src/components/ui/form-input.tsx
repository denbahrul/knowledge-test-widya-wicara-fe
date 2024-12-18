export default function FormInput({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <input
        className="border-gray-400 rounded-md border-2 p-1"
        placeholder={placeholder}
      />
    </div>
  );
}
