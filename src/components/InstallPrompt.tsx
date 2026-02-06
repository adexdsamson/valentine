import React, { useEffect, useState } from 'react';

interface InstallChoiceResult {
  outcome: 'accepted' | 'dismissed';
  platform: string;
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<InstallChoiceResult>;
}

function isIOS() {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  const isApple = /iPad|iPhone|iPod/.test(ua);
  const isSafari = /Safari/.test(ua) && !/CriOS|FxiOS|OPiOS|EdgiOS/.test(ua);
  return isApple && isSafari;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const bip = e as BeforeInstallPromptEvent;
      setDeferredPrompt(bip);
      setVisible(true);
    };

    const handleInstalled = () => {
      setInstalled(true);
      setVisible(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleInstalled);
    };
  }, []);

  const onInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    if (choiceResult.outcome !== 'accepted') {
      setVisible(false);
    }
  };

  const onDismiss = () => setVisible(false);

  if (installed || !visible) {
    if (isIOS()) {
      return (
        <div className="fixed bottom-4 left-0 right-0 flex justify-center pointer-events-none">
          <div className="pointer-events-auto mx-4 max-w-md w-full bg-white/90 backdrop-blur border border-romantic-pink/30 rounded-xl shadow-lg p-4">
            <div className="text-sm text-gray-800">
              Add to Home Screen: tap the Share icon, then "Add to Home Screen".
            </div>
          </div>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center">
      <div className="mx-4 max-w-md w-full bg-white/90 backdrop-blur border border-romantic-pink/30 rounded-xl shadow-lg p-4 flex items-center justify-between gap-3">
        <div className="text-sm text-gray-800">
          Install this app for a better, faster full‑screen experience.
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onDismiss}
            className="px-3 py-2 text-gray-600 hover:text-gray-800"
            aria-label="Dismiss install prompt"
          >
            Not now
          </button>
          <button
            onClick={onInstall}
            className="px-4 py-2 bg-romantic-red text-white rounded-full font-semibold hover:bg-red-600"
            aria-label="Install app"
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
}
