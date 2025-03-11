import { useState, ChangeEvent, FormEvent } from 'react';

// This component would replace your existing form in the Contatti section
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Prepare email content
    const mailtoLink = `mailto:edoardo.gronda23@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    
    // Open default mail client
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Nome</label>
          <input 
            type="text" 
            id="name" 
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-muted rounded-md bg-background" 
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input 
            type="email" 
            id="email" 
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-muted rounded-md bg-background" 
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">Oggetto</label>
        <input 
          type="text" 
          id="subject" 
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 border border-muted rounded-md bg-background" 
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Messaggio</label>
        <textarea 
          id="message" 
          rows={5} 
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-muted rounded-md bg-background"
          required
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
      >
        Invia messaggio
      </button>
    </form>
  );
};

export default ContactForm;