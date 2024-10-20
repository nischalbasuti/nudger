export function setupNudger(element: HTMLButtonElement) {
  let pingerStarted = false;

  const toggleNudger = () => {
    pingerStarted = !pingerStarted;

    if (pingerStarted) {
      element.textContent = 'Stop'
    } else {
      element.textContent = 'Start'
    }
  }

  element.addEventListener('click', () => toggleNudger())
  toggleNudger()
}
