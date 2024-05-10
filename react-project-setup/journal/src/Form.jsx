import "./App.css";

export default function Form() {
  return (
    <main>
      <form>
        <legend className="form__title">NEW ENTRY</legend>

        <div className="form__container">
          <label htmlFor="name">Motto</label>
          <input type="text" id="name" className="form_input__name" />
        </div>

        <div className="form__container">
          <label htmlFor="message">Notes</label>
          <textarea
            id="message"
            cols="30"
            rows="10"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <input type="button" value="Create" className="form_button__submit" />
      </form>
    </main>
  );
}
