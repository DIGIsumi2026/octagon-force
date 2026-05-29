const WHATSAPP_NUMBER = "94777660021"; 

const WHATSAPP_MESSAGE =
  "Hello Octagon Force, I would like to know more about your services.";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Octagon Force on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M16.04 3.2C9.02 3.2 3.32 8.9 3.32 15.92c0 2.24.58 4.42 1.68 6.35L3.2 28.8l6.68-1.75a12.62 12.62 0 0 0 6.16 1.57h.01c7.02 0 12.72-5.7 12.72-12.72S23.06 3.2 16.04 3.2Zm0 23.27h-.01c-1.86 0-3.68-.5-5.27-1.45l-.38-.23-3.96 1.04 1.06-3.86-.25-.4a10.48 10.48 0 0 1-1.61-5.65c0-5.75 4.68-10.43 10.44-10.43 2.79 0 5.41 1.09 7.38 3.06a10.36 10.36 0 0 1 3.06 7.38c0 5.75-4.68 10.44-10.45 10.44Zm5.72-7.82c-.31-.16-1.85-.91-2.14-1.02-.29-.1-.5-.16-.71.16-.21.31-.81 1.02-.99 1.23-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61s1.13 3.03 1.28 3.24c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z"
        />
      </svg>
    </a>
  );
}