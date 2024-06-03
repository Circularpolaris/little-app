return(
  <main className ='main'>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>}/>
      <Route path="/confirmed" element={<ConfirmBooking/>}/>
    </Routes>
  </main>
)