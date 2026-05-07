# Angular `injectAsync` Demo
 
This repository demonstrates Angular's new `injectAsync` function introduced in Angular v22.0.0-next.10.
 
## What This Demo Shows
 
This app demonstrates the new `injectAsync` function landing in Angular v22, including:
 
- Lazily loading a service so its dependencies stay out of the initial bundle
- Using Angular's DI system to properly create the lazy-loaded service instance
- Prefetching the service when the browser is idle using `onIdle`
## Running the App
 
```bash
npm install
ng serve
```
 
Then open `http://localhost:4200`.
 
## Requirements
 
- Angular v22+
- Node.js 18+
## Related
 
- [Angular v22 `injectAsync` commit](https://github.com/angular/angular/commit/444b024d49725afc8b40aec67cfdb63a1f7f23ea)