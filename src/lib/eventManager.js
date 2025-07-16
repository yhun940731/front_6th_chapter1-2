export function setupEventListeners(root) {
  console.log("setupEventListeners called with root:", root);
}

/**
 * @param {Element} element
 * @param {string} eventType
 * @param {function} handler
 */
export function addEvent(element, eventType, handler) {
  element.addEventListener(eventType, handler);
}

export function removeEvent(element, eventType, handler) {
  element.removeEventListener(eventType, handler);
}
