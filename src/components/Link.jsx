import { navigate } from "../lib/router";

/**
 * Internal link. Falls back to the browser for modified clicks (new tab, etc.)
 * and for anything that isn't a same-origin path.
 */
export default function Link({ to, onClick, children, ...rest }) {
  function handleClick(event) {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    event.preventDefault();
    navigate(to);
  }

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
