export function getWhatsAppLink(phone, message) {
  const encodedMessage = encodeURIComponent(message);

  // Detecta si es un dispositivo móvil
  const isMobile = typeof window !== 'undefined' &&
    /Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent);

  if (isMobile) {
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  }

  return `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
}