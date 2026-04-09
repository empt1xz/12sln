import Style from './Floating.module.css'
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  const phone = "5581973272808"
  const message = "Olá, gostaria de fazer um orçamento!"
  
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={Style.whatsappBtn}
    >
      <FaWhatsapp size={30} color="white" />
    </a>

  )
}