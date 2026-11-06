import { useEffect, useSyncExternalStore } from "react";

/**
 * A deliberately small client-side router: the site has two kinds of page
 * (home and project), so a dependency would cost more than it saves.
 * Vercel rewrites every non-file, non-API path to index.html (vercel.json),
 * which is what lets /projects/<slug> load directly.
 */

const NAVIGATE_EVENT = "app:navigate";

function subscribe(callback) {
  window.addEventListener("popstate", callback);
  window.addEventListener(NAVIGATE_EVENT, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(NAVIGATE_EVENT, callback);
  };
}

const getPath = () => window.location.pathname;

export function usePath() {
  return useSyncExternalStore(subscribe, getPath, () => "/");
}

/** Scrolls to the hash target if there is one, otherwise to the top. */
function scrollForLocation() {
  const { hash } = window.location;
  if (hash) {
    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) {
      target.scrollIntoView();
      return;
    }
  }
  window.scrollTo(0, 0);
}

export function navigate(to) {
  const url = new URL(to, window.location.href);
  const samePage = url.pathname === window.location.pathname;
  window.history.pushState({}, "", url.pathname + url.search + url.hash);
  window.dispatchEvent(new Event(NAVIGATE_EVENT));
  // Let the new page render before scrolling to it.
  requestAnimationFrame(() => (samePage && !url.hash ? window.scrollTo(0, 0) : scrollForLocation()));
}

/** Scroll to a #hash once a page mounts (direct loads of /#contact, back navigation, etc.). */
export function useScrollOnPathChange(path) {
  useEffect(() => {
    requestAnimationFrame(scrollForLocation);
  }, [path]);
}
