import './style.css'
import { setupNudger } from './nudger.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Nudger</h1>
    <div class="card">
      <button id="counter" type="button"> Start</button>
    </div>

    <div class="card">
      <button id="counter" type="button">Upload Audio File</button>
    </div>

    <p class="read-the-docs">
      Upload an audio file to play in the interval you choose.
    </p>
  </div>
`

setupNudger(document.querySelector<HTMLButtonElement>('#counter')!)
