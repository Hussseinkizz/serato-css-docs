const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault;
  };
  const onSubmitHandler = (e) => {
    e.preventDefault;
    console.log(e.targt.value);
  };

  return (
    <form
      className="form contact flex-column background-gray-100 padding-4 border-radius-normal"
      onSubmit={(e) => onSubmitHandler(e)}
      autoSave="true"
    >
      <label htmlFor="name" className="font-bold">
        Your Name:
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="input username border-radius-normal padding-1"
        placeholder="John Doe..."
      />
      <label htmlFor="email" className="font-bold">
        Your Email:
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="input usermail border-radius-normal padding-1"
        placeholder="you@example.com"
      />
      <label htmlFor="massage" className="font-bold">
        Your Concern:
      </label>
      <textarea
        name="massage"
        id="massage"
        placeholder="Your massage, request a feature or contribute!"
        className="text-area userconcern border-radius-normal padding-1"
      />
      <button type="submit" className="button-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
