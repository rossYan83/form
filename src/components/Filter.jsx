export default function Filter({ value, onChange }) {
  return (
    <label className="field filter-field">
      <span className="label-text">Find contacts by name</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search…"
      />
    </label>
  );
}
 