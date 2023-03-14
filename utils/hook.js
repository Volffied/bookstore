import { useEffect, useState } from 'react'
import { decode } from 'html-entities';
// https://www.skillthrive.com/hunter/posts/change-nav-on-scroll
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', updatePosition)

    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
}

export const LimitText = ({text, limit}) => {
  if(text.length > limit) {
    const data = text.substring(0, parseInt(text.length - limit)).concat('...');
    return data;
  }
}

export function ParseHtml(htmlString) {
  const decodedString = decode(htmlString);
  return decodedString;
}