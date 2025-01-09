export default function UserInput() {
  return (
    <>
      <div className="input-group" id="user-input">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input type="text" />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input type="text" />
        </p>
      </div>
      <div className="input-group" id="user-input">
        <p>
          <label htmlFor="">Expected Return</label>
          <input type="text" />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input type="text" />
        </p>
      </div>
    </>
  );
}
