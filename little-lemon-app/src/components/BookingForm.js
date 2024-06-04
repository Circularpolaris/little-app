import React, {useState} from 'react';


const BookingForm =(props) => {
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
              <label htmlFor='book-date'>Choose Date:</label>
              <input id='book-date' data-testid="book-date" value={date} onChange = {(e)=> handleChange(e.target.value)} type='date' required/>
            </div>
            <div>
              <label htmlFor='book-time'>Choose Time:</label>
              <select id='book-time' data-testid="book-time" value={times} onChange = {(e)=> setTimes(e.target.value)} required>
                <option value="" data-testid="option">Select time</option>
              {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
              </select>
  </div>
            <div>
              <label htmlFor='book-guests'>Number of guests:</label>
              <input id='book-guests' data-testid="book-guests" min="1" value={guests} onChange = {(e)=> setGuests(e.target.value)} type='number' placeholder={0} max={10} required/>
            </div>
            <div>
              <label htmlFor='book-occasion'>Occasion:</label>
              <select id='book-occasion' data-testid="book-occasion" key={occasion} value={occasion} onChange = {(e)=> setOccasion(e.target.value)} required>
                <option value="">Select an option</option>
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div className="btnReceive">
              <input aria-label="On Click" type={"submit"} value={"Make your reservation"}></input>
            </div>
          </fieldset>
        </form>
      </section>
    </header>

  )
}
export default BookingForm;