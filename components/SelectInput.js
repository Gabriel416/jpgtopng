export default ({ onSelect }) => {
  return (
    <div>
      <select name="" id="" onChange={e => onSelect(e.target.value)}>
        <option value="JPG">JPG</option>
        <option value="PNG">PNG</option>
      </select>
    </div>
  );
};
