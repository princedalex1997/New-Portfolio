import { Code, Briefcase, Download, Mail } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const resumeLink = "https://drive.google.com/file/d/1R42-GfQFv15UFB854U65hEVySqryX3xZ/view?usp=sharing"


export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if name is empty OR email is empty
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return alert("Please fill in all the details before sending. 🚀");
    }
    // Prepare template parameters to match your EmailJS Template
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    try {
      const result = await emailjs.send(
        'service_81zj38g',
        'template_agfj5jp',
        templateParams,
        'hBYlWKBte1DR3LPyo'
      );

      if (result.status === 200) {
        alert("Message sent successfully! 🚀");
        setForm({ name: "", email: "", message: "" }); // Reset form
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <footer className="w-full min-h-[80vh] flex flex-col justify-between pt-32 pb-8 px-4 md:px-12 max-w-5xl mx-auto relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 z-10 relative">
        <div>
          <h2 className="text-5xl font-extrabold text-white mb-6">Let's build <br /><span className="text-primary">together.</span></h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a href={resumeLink} className="inline-flex items-center gap-2 px-8 py-4 glass text-white font-medium hover:bg-white/10 transition-colors relative group overflow-hidden border border-primary/30 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]">
            <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Download size={20} className="relative z-10" />
            <span className="relative z-10">Download Resume</span>
          </a>
        </div>

        <form className="glass p-8 flex flex-col gap-6" onSubmit={handleSubmitForm}>
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Name</label>
            <input
              name='name'
              onChange={handleChange}
              value={form.name}
              type="text"
              className="w-full
              bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              placeholder="Tony Stark" />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Email</label>
            <input
              name='email'
              value={form.email}
              onChange={handleChange}
              type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              placeholder="Tony3000@gmail.com" />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Message</label>
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Hai Prince...." />
          </div>
          <button type="submit" className="bg-white text-black font-bold py-4 rounded-lg flex justify-center items-center gap-2 hover:bg-gray-200 transition-colors">
            <Mail size={18} /> {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-4 text-gray-500 text-sm z-10 relative">
        <p>© {new Date().getFullYear()} Prince D Alex. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/princedalex1997" className="hover:text-white transition-colors flex items-center gap-2"><Code size={18} /> GitHub</a>
          <a href="https://www.linkedin.com/in/prince-d-alex/" className="hover:text-white transition-colors flex items-center gap-2"><Briefcase size={18} /> LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
