const Contact = () => (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <section id="contact" className="p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-gray-800">Contact</h2>
        <form className="mt-4 max-w-md">
          <input className="w-full p-2 mb-4 border rounded" type="text" placeholder="Name" />
          <input className="w-full p-2 mb-4 border rounded" type="email" placeholder="Email" />
          <textarea className="w-full p-2 mb-4 border rounded" placeholder="Message"></textarea>
          <button className="w-full p-2 bg-blue-600 text-white rounded">Send</button>
        </form>
      </section>
    </div>
  );
  
  export default Contact;