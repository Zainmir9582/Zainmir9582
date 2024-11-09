import { FaGithub, FaInstagram, FaFacebook, FaGitlab, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  { name: "GitHub", url: "https://github.com/your-username", icon: <FaGithub /> },
  { name: "LinkedIn", url: "https://linkedin.com/in/your-username", icon: <FaLinkedin /> },
  { name: "Instagram", url: "https://instagram.com/your-username", icon: <FaInstagram /> },
  { name: "Facebook", url: "https://facebook.com/your-username", icon: <FaFacebook /> },
  { name: "GitLab", url: "https://gitlab.com/your-username", icon: <FaGitlab /> }
];

const Contact_Link = () => (
  <section id="contact" className="p-8 bg-gray-100">
    <h2 className="text-2xl font-bold text-gray-800">Contact Links</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-black">
      {socialLinks.map(link => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-white shadow rounded text-center flex flex-col items-center hover:bg-gray-200 transition"
        >
          <span className="text-2xl mb-2">{link.icon}</span>
          <span className="font-semibold">{link.name}</span>
        </a>
      ))}
    </div>
  </section>
);

export default Contact_Link;