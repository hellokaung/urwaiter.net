const analyticsHosts = new Set(["urwaiter.net", "www.urwaiter.net"]);

if (analyticsHosts.has(window.location.hostname)) {
  const [{ initializeApp }, { getAnalytics, isSupported }] = await Promise.all([
    import("https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js"),
    import("https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js"),
  ]);

  const firebaseConfig = {
    apiKey: "AIzaSyBMSPg8u_KTJbqIRo5DgyZYPFGl56Tyvk4",
    authDomain: "yourwaiter-3baed.firebaseapp.com",
    projectId: "yourwaiter-3baed",
    storageBucket: "yourwaiter-3baed.firebasestorage.app",
    messagingSenderId: "102300805677",
    appId: "1:102300805677:web:74bd98cb255a2a5ddbe6a4",
    measurementId: "G-EPXCVYWT0Y",
  };

  const app = initializeApp(firebaseConfig);
  if (await isSupported()) {
    try {
      getAnalytics(app);
    } catch (_) {}
  }
}
