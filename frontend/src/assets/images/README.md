# Image replacement guide

Add your own portfolio images in this folder, then register them in:

`src/data/imageAssets.ts`

Example:

```ts
import heroHome from "../assets/images/hero-home.jpg";

export const images = {
  hero: {
    monitoring: heroHome
  }
};
```

Keep image names clear, for example:

- hero-monitoring.jpg
- service-camera-installation.jpg
- product-doorbell-camera.jpg
- project-residential-security.jpg
- contact-support-card.jpg
