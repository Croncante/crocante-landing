# Crocante LAT — Stealth Landing

Landing experimental para crocante.lat en modo stealth.

## 🚀 Stack

- HTML5
- CSS3 (Pure CSS, no frameworks)
- Vanilla JavaScript (minimal)
- Vercel (Deployment)

## 📦 Estructura

```
landing/
├── index.html      # Página principal
├── style.css       # Estilos globales
├── vercel.json     # Configuración de Vercel
├── assets/
│   ├── background.jpg              # Imagen fallback difuminada
│   └── sora2-datcos-latam.mp4      # Video generado con Sora 2
└── README.md       # Este archivo
```

## 💻 Correr localmente

1. Clona el repo
2. Abre la carpeta en Cursor
3. Abre `index.html` directamente en el navegador o usa Live Server
4. O ejecuta: `open index.html`

## 🎨 Características

- **Video de fondo** con fallback a imagen estática (o gradiente temporal)
- **Animación de terminal** con mensajes de "access protocol"
- **Botón de Request Access** (configurable)
- **100% responsive**
- **Efecto stealth/misterio** con blur y animaciones sutiles

## 🛠️ Deploy en Vercel

1. Crea un repo GitHub `landing`
2. Conecta el repo en [vercel.com](https://vercel.com)
3. Sube los archivos y publica
4. Asocia dominio: `crocante.lat`

### DNS en GoDaddy

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.21.21
```

## 🔄 Futuras Mejoras

- Agregar video real de Sora 2 cuando esté disponible
- Agregar imagen de fondo personalizada en `/assets`
- Integrar formulario de waitlist funcional
- Analytics
- Logo y branding completo

