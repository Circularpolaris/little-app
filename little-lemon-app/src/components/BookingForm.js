import React, {useState} from 'react';


const BookingForm =(props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  }

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  }

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
          <div>
              <label htmlFor='name'>Your Name:</label>
              <input id='name' value={name} onChange={(e) => setName(e.target.value)} type='text' required/>
            </div>
            <div>
              <label htmlFor='email'>Email:</label>
              <input id='email' value={email} onChange={(e) => setEmail(e.target.value)} type='email' required/>
            </div>
            <div>
              <label htmlFor='date'>Choose Date:</label>
              <input id='date' data-testid="book-date" value={date} onChange = {(e)=> handleChange(e.target.value)} type='date' required/>
            </div>
            <div>
              <label htmlFor='time'>Choose Time:</label>
              <select id='time' data-testid="book-time" value={times} onChange = {(e)=> setTimes(e.target.value)} required>
                <option value="" data-testid="option">Select time</option>
              {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
              </select>
            </div>
            <div>
              <label htmlFor='guests'>Number of guests:</label>
              <input id='guests' data-testid="book-guests" value={guests} onChange = {(e)=> setGuests(e.target.value)} type='number' placeholder={0} min={1} max={10} required/>
            </div>
            <div>
              <label htmlFor='occasion'>Occasion:</label>
              <select id='occasion' data-testid="book-occasion" key={occasion} value={occasion} onChange = {(e)=> setOccasion(e.target.value)} required>
                <option value="">Select an option</option>
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Anniversary</option>
                <option>Other</option>
              </select>
            </div>
            <div className="reserveButton">
              <input aria-label="On Click" type={"submit"} value={"Make your reservation"}></input>
            </div>
          </fieldset>
        </form>
      </section>
    </header>

  )
}
export default BookingForm;