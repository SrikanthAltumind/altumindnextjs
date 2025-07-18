const WhatsAppButton = ({ phone, service }) => {
  const message = `Hi, I'm interested in ${service}`;
  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/${phone}?text=${encodedMessage}`;
    return (
    <a href={waLink} target="_blank" rel="noopener noreferrer">
      <img
        src="https://static.vecteezy.com/system/resources/previews/018/930/564/non_2x/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png"
        alt="Chat on WhatsApp"
        style={{
          width: "60px",
          height: "60px",
          zIndex: 50,
        }}
      />
    </a>
  );
};
export default WhatsAppButton;
