export default function ContactRoute() {
  return (
      <div id="contact" className="h-screen bg-green-100 flex flex-col items-center justify-center p-10">
          <h1 className="text-5xl font-bold mb-4">Contact Me</h1>
          <p className="text-lg text-center max-w-3xl">
              Feel free to reach out to me for collaborations, freelance opportunities, or just a friendly chat! 
              I am always open to discussing exciting projects or ideas.
          </p>
          <div className="mt-6 space-y-4 text-lg">
              <p>Email: your.email@example.com</p>
              <p>Phone: +123 456 7890</p>
              <p>Location: Your City, Your Country</p>
          </div>
      </div>
  );
}
