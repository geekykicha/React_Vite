import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// FIBER 
// In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
// Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
// A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

// CREATEROOT works

// reconciliation - "virtual DOM."
// The algorithm React uses to differntiate one tree with another
//  to determine which parts need to be changed.

// update
// A change in the data used to render a React app. Usually the result of `setState`.
//  Eventually results in a re-render.

// Different component types are assumed to generate substantially different trees.
// React will not attempt to diff them, but rather replace the old tree completely.
// Diffing of lists is performed using keys.
// Keys should be "stable, predictable, and unique."