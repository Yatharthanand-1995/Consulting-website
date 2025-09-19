// Stratex AI Service Worker
// Version 1.0.0

const CACHE_NAME = 'stratex-ai-v1';
const STATIC_CACHE = 'stratex-static-v1';
const DYNAMIC_CACHE = 'stratex-dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/services',
  '/industries',
  '/our-insights',
  '/about',
  '/contact',
  '/manifest.json',
  '/offline.html',
];

// API endpoints to cache
const API_CACHE_PATTERNS = [
  /\/api\//,
  /\/our-insights\//,
  /\/services\//,
  /\/industries\//,
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('[SW] Installing service worker...');

  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Static assets cached successfully');
        return self.skipWaiting(); // Activate immediately
      })
      .catch(error => {
        console.error('[SW] Failed to cache static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating service worker...');

  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Service worker activated');
        return self.clients.claim(); // Take control immediately
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  // Handle different types of requests
  event.respondWith(handleRequest(request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  try {
    // Strategy 1: Cache First for static assets
    if (isStaticAsset(url.pathname)) {
      return await cacheFirst(request);
    }

    // Strategy 2: Network First for API calls and dynamic content
    if (isApiRequest(url.pathname) || isDynamicContent(url.pathname)) {
      return await networkFirst(request);
    }

    // Strategy 3: Stale While Revalidate for pages
    return await staleWhileRevalidate(request);

  } catch (error) {
    console.error('[SW] Request failed:', error);

    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      return await getOfflinePage();
    }

    // Return a generic offline response
    return new Response('Offline', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Cache First Strategy - for static assets
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) {
    return cached;
  }

  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(STATIC_CACHE);
    cache.put(request, response.clone());
  }

  return response;
}

// Network First Strategy - for dynamic content
async function networkFirst(request) {
  try {
    const response = await fetch(request);

    if (response.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }
    throw error;
  }
}

// Stale While Revalidate Strategy - for pages
async function staleWhileRevalidate(request) {
  const cached = await caches.match(request);

  const networkPromise = fetch(request).then(response => {
    if (response.ok) {
      const cache = caches.open(DYNAMIC_CACHE);
      cache.then(c => c.put(request, response.clone()));
    }
    return response;
  }).catch(() => cached); // Fallback to cache on network error

  return cached || await networkPromise;
}

// Helper functions
function isStaticAsset(pathname) {
  return pathname.startsWith('/_next/') ||
         pathname.startsWith('/static/') ||
         pathname.endsWith('.js') ||
         pathname.endsWith('.css') ||
         pathname.endsWith('.woff2') ||
         pathname.endsWith('.png') ||
         pathname.endsWith('.jpg') ||
         pathname.endsWith('.jpeg') ||
         pathname.endsWith('.svg') ||
         pathname.endsWith('.ico');
}

function isApiRequest(pathname) {
  return API_CACHE_PATTERNS.some(pattern => pattern.test(pathname));
}

function isDynamicContent(pathname) {
  return pathname.includes('/search') ||
         pathname.includes('?') ||
         pathname.includes('#');
}

async function getOfflinePage() {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const offlinePage = await cache.match('/offline.html');
    return offlinePage || new Response('You are offline', {
      headers: { 'Content-Type': 'text/html' }
    });
  } catch (error) {
    return new Response('You are offline', {
      headers: { 'Content-Type': 'text/html' }
    });
  }
}

// Background sync for form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  // Handle background sync for contact forms
  console.log('[SW] Syncing contact form data...');
}

// Push notifications (if needed in future)
self.addEventListener('push', event => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: '/icon-192.png',
      badge: '/icon-72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'Explore',
          icon: '/icon-192.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/icon-192.png'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification('Stratex AI', options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

console.log('[SW] Service worker loaded successfully');